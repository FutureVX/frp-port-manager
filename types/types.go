package types

const (
	APIVersion = "0.1.0"

	OpLogin       = "Login"
	OpNewProxy    = "NewProxy"
	OpPing        = "Ping"
	OpNewWorkConn = "NewWorkConn"
	OpNewUserConn = "NewUserConn"
	OpCloseProxy  = "CloseProxy"
)

type Request struct {
	Version string                 `json:"version"`
	Op      string                 `json:"op"`
	Content map[string]interface{} `json:"content,omitempty"`
	Body    interface{}            `json:"-"`
}

type Response struct {
	Content      interface{} `json:"content"`
	RejectReason string      `json:"reject_reason"`
	Reject       bool        `json:"reject"`
	UnChange     bool        `json:"unchange"`
}

type User struct {
	User  string            `json:"user"`
	Metas map[string]string `json:"metas,omitempty"`
	RunID string            `json:"run_id"`
}

type Login struct {
	Version      string            `json:"version"`
	Hostname     string            `json:"hostname"`
	OS           string            `json:"os"`
	Arch         string            `json:"arch"`
	User         string            `json:"user"`
	Timestamp    int64             `json:"timestamp"`
	PrivilegeKey string            `json:"privilege_key"`
	RunID        string            `json:"run_id"`
	PoolCount    int               `json:"pool_count"`
	Metas        map[string]string `json:"metas,omitempty"`
}

type Proxy struct {
	User           User   `json:"user"`
	ProxyName      string `json:"proxy_name"`
	ProxyType      string `json:"proxy_type"`
	UseEncryption  bool   `json:"use_encryption"`
	UseCompression bool   `json:"use_compression"`
	Group          string `json:"group"`
	GroupKey       string `json:"group_key"`

	RemotePort int `json:"remote_port"` // tcp and udp only

	CustomDomains     []string          `json:"custom_domains"` // http and https only
	Subdomain         string            `json:"subdomain"`
	Locations         []string          `json:"locations"`
	HTTPUser          string            `json:"http_user"`
	HTTPPwd           string            `json:"http_pwd"`
	HostHeaderRewrite string            `json:"host_header_rewrite"`
	Headers           map[string]string `json:"headers,omitempty"`

	SK string `json:"sk"` // stcp only

	Multiplexer string `json:"multiplexer"` // tcpmux only

	Metas map[string]string `json:"metas,omitempty"`
}

type WorkConn struct {
	User         User   `json:"user"`
	RunID        string `json:"run_id"`
	Timestamp    string `json:"timestamp"`
	PrivilegeKey string `json:"privilege_key"`
}

type UserConn struct {
	User       User   `json:"user"`
	ProxyName  string `json:"proxy_name"`
	ProxyType  string `json:"proxy_type"`
	RemoteAddr string `json:"remote_addr"`
	RemoteIP   string `json:"-"`
}
