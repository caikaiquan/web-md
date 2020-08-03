## nodemon使用
### 使用es6模块导入导出配置
```
安装依赖 
npm install @babel/core  @babel/node  @babel/preset-env  babel-loader  babel-node -S

package.json
"start": "nodemon --exec babel-node ./src/index.js"

.babelrc
{
    "presets":[
      [
        "@babel/preset-env",
        {
          "targets":{
            "node":"current"
          }
        }
      ]
    ]
  }
```