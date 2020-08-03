## MongoDB

### 安装MongoDB

### 启动MongoDB
```
mongod --dbpath="C:\MongoDB\data"
```

### Mongodb之安全模式的使用
```
运行mongod(D:\MongoDB\Server\4.2\bin)
mongo.exe

创建管理员
use admin
db.createUser({user:"caikaiquan",pwd:"Caikq@2019",roles:["root"]})

创建数据库 blog 并创建用户
use blog
db.createUser({user:"ckqblog",pwd:"Caikq@2019",roles:[{role:"dbOwner",db:"blog"}]})

查看创建的用户
use admin
db.auth("caikaiquan","Caikq@2019")
show users
关闭mongod

安全模式启动mongod
mongod --dbpath=D:\MongoDB\Server\4.2\data --port=27035 --auth

建立连接
mongo localhost:27035
```
### 服务器端使用（基本使用）
```
启动服务
mongod --dbpath=C:\MongoDB\data --bind_ip 0.0.0.0 --port=27035 --auth
启动mongo
mongo 111.229.45.205:27035
// 登录admin
use admin
db.auth("caikaiquan","Caikq@2019")
// 登录普通用户
use blog
db.auth("ckqblog","Caikq@2019")

// 查看当前数据库
db

// 插入数据
db.blog.insert({id:1,name:"张三丰"})
// 查询数据
db.blog.find()
```
