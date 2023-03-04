package server

import (
	"encoding/json"
	"fmt"
	"frp-port-manager/dao"
	"frp-port-manager/types"
	"frp-port-manager/web"
	"github.com/gin-gonic/gin"
	"io"
	"log"
	"mime"
	"net/http"
	"strings"
)

const (
	IndexPage = "public/index.html"
	StormPath = "storm.db"
)

var ignoreResponse = types.Response{
	Reject:       false,
	RejectReason: "",
	UnChange:     true,
	Content:      nil,
}

type Server struct {
	router *gin.Engine
	db     *dao.Storm
}

func NewServer() *Server {
	db, err := dao.NewStorm(StormPath)
	if err != nil {
		panic(err)
	}

	gin.SetMode(gin.ReleaseMode)

	s := &Server{
		router: gin.New(),
		db:     db,
	}

	err = mime.AddExtensionType(".js", "application/javascript")
	if err != nil {
		log.Printf("error when add extension type, err: %v", err)
	}

	s.router.GET("/", s.GetIndexPage)
	s.router.POST("/handler", s.handler)
	s.router.GET("/api/proxy", s.GetProxy)
	s.router.DELETE("/api/proxy/:id", s.DeleteProxy)
	assets := &web.ServeFileSystem{
		E:    web.EmbeddedFiles,
		Path: "public/assets",
	}
	s.router.StaticFS("/assets", assets)
	s.router.Use(CORS, gin.Logger(), gin.Recovery())

	//if not route (route from frontend) redirect to index
	s.router.NoRoute(func(c *gin.Context) {
		if !strings.HasPrefix(c.Request.RequestURI, "/api") {
			s.GetIndexPage(c)
		}
	})

	return s
}

func (s *Server) GetIndexPage(c *gin.Context) {
	bytes, err := web.EmbeddedFiles.ReadFile(IndexPage)
	if err != nil {
		fmt.Println("err", err)
	}
	c.Data(http.StatusOK, "", bytes)
}

func (s *Server) Serve(addr ...string) error {
	return s.router.Run(addr...)
}

func (s *Server) handlerNewProxy(req *types.Request) types.Response {
	proxyName := req.Content["proxy_name"].(string)
	remotePort := req.Content["remote_port"].(float64)

	proxy, err := s.db.GetProxyByPort(int(remotePort))
	// if port has used and name != request name, reject
	if proxy != nil && proxy.Name != proxyName {
		return types.Response{
			Reject:       true,
			RejectReason: "port is used",
			UnChange:     true,
			Content:      nil,
		}
	}

	if proxy == nil {
		// else create new proxy
		_, err = s.db.CreateProxy(proxyName, int(remotePort))
		if err != nil {
			log.Printf("error when create proxy name %s, err: %v", proxyName, err)
		}

		return ignoreResponse
	}

	err = s.db.UpdateProxy(proxyName, true)
	if err != nil {
		log.Printf("error when update proxy name %s, err: %v", proxyName, err)
	}

	return ignoreResponse
}

func (s *Server) handlerCloseProxy(req *types.Request) types.Response {
	proxyName := req.Content["proxy_name"].(string)

	err := s.db.UpdateProxy(proxyName, false)
	if err != nil {
		log.Printf("error when update proxy name %s, err: %v", proxyName, err)
	}
	return ignoreResponse
}

func (s *Server) handler(ctx *gin.Context) {
	body, err := io.ReadAll(ctx.Request.Body)
	if err != nil {
		log.Printf("read request body error: %v \n", err)
		ctx.JSON(http.StatusOK, ignoreResponse)
		return
	}

	request := &types.Request{}
	err = json.Unmarshal(body, request)
	if err != nil {
		log.Printf("unmarshal request body error: %v \n", err)
		ctx.JSON(http.StatusOK, ignoreResponse)
		return
	}
	// verify api version
	if request.Version != types.APIVersion {
		log.Printf("unsupported api version %s \n", request.Version)
		ctx.JSON(http.StatusOK, ignoreResponse)
		return
	}

	if request.Op == types.OpCloseProxy {
		ctx.JSON(http.StatusOK, s.handlerCloseProxy(request))
		return
	}

	if request.Op == types.OpNewProxy {
		ctx.JSON(http.StatusOK, s.handlerNewProxy(request))
		return
	}
}

func (s *Server) GetProxy(ctx *gin.Context) {
	proxies, err := s.db.GetProxies()
	if err != nil {
		ctx.Status(http.StatusNotFound)
		return
	}

	ctx.JSON(http.StatusOK, proxies)
}

func (s *Server) DeleteProxy(ctx *gin.Context) {
	data := DeleteProxyForm{}

	err := ctx.ShouldBindUri(&data)
	if err != nil {
		ctx.Status(http.StatusBadRequest)
		return
	}
	err = s.db.DeleteProxy(data.Id)
	if err != nil {
		ctx.Status(http.StatusBadRequest)
		return
	}
	ctx.Status(http.StatusOK)
}
