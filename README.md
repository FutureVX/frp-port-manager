# frp-port-manager


## 说明

frp [插件](https://github.com/fatedier/frp/blob/dev/doc/server_plugin.md)

frps原有dashboard重启服务后数据会丢失，故开发此插件做一些扩展。

使用gin + storm开发

## 功能
1. 对所有的proxy进行缓存并展示状态。
2. 通过remote port决定是否接收代理。