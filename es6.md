## ES6相关

### 模块导入导出
1. 打包项目（vue、react）

    导出：
    ```
    export fun = () =>{};
    export a = 'aaa';
    或者
    export default {
      fun,
      a
    };
    ```
    导入：
    ```
    import { fun, a } from 'xxx'
    ```

    导出：
    ```
    export const url = 'aaaa';
    export const name = '阿斯顿发了卡京东方';
    export const age = 19;
    export default {
      url:'123',
      name:'1312313',
      age:18
    };
    ```
    导入: 带*导入 如果是export default导出会在导出对象的default属性里
    ```
    import * as obj from 'xxxxx'
    结果：{ url: 'aaaa',
           name: '阿斯顿发了卡京东方',
           age: 19,
           default: { url: '123', name: '1312313', age: 18 } }
    ```

2. 在Node模块中,采用的是commonjs规范,也就是使用require方式引入模块,而使用module.exports导出接口
    导出：
    ```
    module.exports = {
      name:"奥术大师了开发及",
      init:() =>{
        console.log(1231231)
      }
    }
    ```

    导入：
    ```
    obj = 整个导出对象
    name = "奥术大师了开发及"
    const obj = require('./2.js')
    或者
    const name = require('./2.js')
    ```
[^_^]: 这里是一段注释文本