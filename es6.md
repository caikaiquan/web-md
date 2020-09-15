## ES6相关

### 1. 模块导入导出
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

### 2. Promise链式调用
```
  const fun1 = () => {
    console.log('这里开始执行fun1')
    let fun = new Promise(resolve =>{
      setTimeout(() => {
        console.log('准备开始执行fun2')
        resolve({fun1:true})
      }, 1000);
    })
    return fun
  }

  const fun2 = (res) => {
    console.log('这里开始执行fun2')
    let fun = new Promise(resolve =>{
      setTimeout(() => {
        console.log('准备开始执行fun3')
        resolve({...res,fun2:true})
      }, 1000);
    })
    return fun
  }

  const fun3 = (res) => {
    console.log('这里开始执行fun3')
    let fun = new Promise(resolve =>{
      setTimeout(() => {
        console.log('准备开始执行fun4')
        resolve({...res,fun3:true})
      }, 1000);
    })
    return fun
  }

  const fun4 = (res) => {
    console.log('这里开始执行fun4')
    let fun = new Promise(resolve =>{
      setTimeout(() => {
        console.log('执行结束了')
        resolve({...res,fun4:true})
      }, 1000);
    })
    return fun
  }


  fun1()
  .then(fun2)
  .then(fun3)
  .then(fun4)
  .then(data =>{
    console.log(data)
  })
  .catch(err =>{
    console.log(err)
  })
```
### 3. async await
```
  const fun1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({fun1:"这里执行了fun1函数"})
    }, 1000);
  })
  
  const fun2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({fun2:"这里执行了fun2函数"})
      reject({fun2Error:"执行fun2报错了"})
    }, 1000);
  })
  
  const fun3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({fun3:"这里执行了fun3函数"})
    }, 1000);
  })
  
  const fun4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({fun4:"这里执行了fun4函数"})
    }, 1000);
  })
  
  const asyncFun = async () => {
    let resTotal = {};
    let res1 = await fun1;
    let res2 = await fun2;
    let res3 = await fun3;
    let res4 = await fun4;
    resTotal = {...resTotal,...res1, ...res2, ...res3, ...res4}
    console.log(resTotal)
  }
  
  asyncFun()
  .catch(err =>{
    console.log(err)
  })
```