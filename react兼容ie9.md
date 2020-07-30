## React兼容ie9/ie11

### react-app-polyfill
```
npm install react-app-polyfill --save
```

### 在src下的index.js下引入
```
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
```

### 修改package.json
```
"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all",
      "ie 11" （+++ 新增）
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "ie 11" （+++ 新增）
    ]
  },
```

### 如果运行报错删除node_modules重新安装