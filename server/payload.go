package server

type DeleteProxyForm struct {
	Id int `uri:"id" binding:"required"`
}
