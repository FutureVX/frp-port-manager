# frp-port-manager


## 说明

frp [插件](https://github.com/fatedier/frp/blob/dev/doc/server_plugin.md)

frps原有dashboard重启服务后数据会丢失，故开发此插件做一些扩展。

使用gin + storm开发

## 功能
1. 对所有的proxy进行缓存并展示状态。
2. 通过remote port和name决定是否接收代理。

## 配置

在frps.ini中添加如下内容
```text
[plugin.port-manager]
addr = 127.0.0.1:8080
path = /handler
ops = NewProxy,CloseProxy
```

## 进程管理
使用supervisor

```text
# frp-manager.conf 
[program:frp-manager]
command=/path/frp-manager/frp-port-manager
directory=/path/frp-manager
user=root
stdout_logfile=/path/frp-manager/frp-manager.log
autostart=true
autorestart=true
```

