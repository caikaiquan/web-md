## 开发环境写入Cookie
### 修改hosts
```
C:\Windows\System32\drivers\etc
hosts 文件
# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
127.0.0.1 www.my.beta.ule.com （新增）

访问页面 http://www.my.beta.ule.com:8081/downloadcenter.html#/
webpack.dev.conf.js 或者 vue.config.js
devServer:{
  disableHostCheck: true,
}
```