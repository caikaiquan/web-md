// // // // let res = /^1[0-9]{1}\d{9}$/
// // // // console.log(res.test('1159513358'))
// // // // console.log(res.test('1012345678'))
// // // // console.log(res.test('1012345'))
// // // // console.log(res.test('30123456789'))
// // // // console.log(res.test('20123456789'))

// // // // const fun = () => {
// // // //   return new Promise((resolve, reject) => {
// // // //     if (Math.random() > 0.5) {
// // // //       resolve({ code: '0000', msg: 'success' })
// // // //     } else {
// // // //       reject({ code: '9999', msg: 'error' })
// // // //     }
// // // //   })
// // // // }

// // // // const fun1 = new Promise((resolve, reject) => {

// // // // })


// // // // const asyncFun = async () => {
// // // //   let res = await fun();
// // // //   console.log(res, 'success')
// // // // }

// // // // asyncFun().catch(err =>{
// // // //   console.log(err,'catch')
// // // // })
// // // // fun().then( res => {console.log(res) , err =>{console.log(err)}})

// // // // 正则表达式修饰符 
// // // /** 
// // //  * i   执行对大小写不敏感的匹配。
// // //  * g   执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
// // //  * m   执行多行匹配。
// // //  * 
// // //  * 
// // //  *  **/

// // // // let str = "aALKIOOUAa";
// // // // let reg = /Aa/i;
// // // // let res = str.match(reg);
// // // // console.log(res) 


// // // // console.log("AaLKIOOUAa".match(/Aa/g))
// // // // console.log("aALKIOAaOUAa".match(/Aa/m))
// // // // console.log("aALKIOAaOUAa".replace(/Aa/g,'=='))
// // // // console.log("aALKIOAaOUAa".replace(/Aa/m,'=='))


// // // // let str = "abcABCanjkjkajdfABCabc"
// // // // let reg = /[a-Z]/;
// // // // // let res = "abcABCanjkjkajdfABCabc".match(/[abc]/g)
// // // // let res = reg.test(str)
// // // // console.log(res)


// // // // let reg = /[0-9]/
// // // // let str = "a123132"
// // // // console.log(str.match(reg))
// // // // console.log(reg.test(str))
// // // // console.log(/[a-Z]/.test("abcABCanjkjkajdfABCabc"))
// // // // let reg1 = /[a-z]|[A-Z]/;
// // // // let str1 = "abcABCanjkjkajdfABCabc"
// // // // console.log(reg1.test(str1))
// // // // console.log(str1.match(reg1))

// // // // console.log(/(x|y)/.test("x|b"))


// // // // let reg = /[^abc]/
// // // // let str = 'abc'

// // // // console.log(str.match(reg))
// // // // console.log(reg.test(str))

// // // // console.log(/[^abc]/.test('abcq112341'))

// // // // let str = 'ule_usession=674267480%7Cwom; opc_token_cookie="wpslLNMmOxj0EJ+2AXcu+ebTwlF4zSgbEMExBUNK2x6EpM3VVCNtXttE98yLOjCatAli1nV9RHW/CJIUSde8nA=="; opc_token_cookie_id=12620; ule_ck=1245184755_1594947901_1594948427107_1594948475195; ule_utk="uv=6713643540901076&&pv=2f5e5867a66ba084f70d30bacdde45dc&&utn=1594948475217&&utl=1594948427115&&utc=1594947901076"'


// // // // 手机号验证规则 
// // // // let mobileReg = /^1([3-9]{1})[0-9]{9}$/;
// // // // let a = 15951335874; true
// // // // let b = 11951335874; false
// // // // let c = 1395133587;  false
// // // // let d = 139513358711; false
// // // // let obj = {a,b,c,d}
// // // // for(let key in obj){
// // // //   console.log(key,mobileReg.test(obj[key]))
// // // // }

// // // // 邮箱验证规则
// // // // let emilReg = /^([a-z|A-Z|0-9])+\@[A-z|0-9]+\.(com|cn)$/
// // // // let a = "619749636@qq.com"
// // // // let b = "caikaiquan@ule.com"
// // // // let c = "caikaiquan@ule.cn"
// // // // let d = "caikaiquan@ule.co"
// // // // let e = "caikaiquan&ule.com"
// // // // let f = "_]@ule.com"
// // // // let obj = {a,b,c,d,e,f}
// // // // for(let key in obj){
// // // //   console.log(emilReg.test(obj[key],key))
// // // // }


// // // // Proxy
// // // // let obj = new Proxy({}, {
// // // //   get: (target, propKey, receiver) => {
// // // //     console.log('target',target,"propKey",propKey,"receiver",receiver)
// // // //     return 1
// // // //   },
// // // //   set: (target, propKey, receiver) => {
// // // //     console.log('target',target,"propKey",propKey,"receiver",receiver)
// // // //   }
// // // // })

// // // // var obj = new Proxy({}, {
// // // //   get(target, propKey, receiver) {
// // // //     return target['propKey'];
// // // //   },
// // // //   set(target, propKey, value, receiver) {
// // // //     target['propKey'] = value;
// // // //     return value
// // // //   }
// // // // });

// // // // // obj.count = 1
// // // // obj.name = '张三丰'
// // // // console.log(obj)




// // // // function fn(n1,n2){
// // // //   console.log(this);  
// // // //   console.log(n1,n2)
// // // // }

// // // // fn.call();


// // // // function Person (name) {
// // // //   this.name = name;
// // // //   this.sum = function(){
// // // //     console.log(this.name)
// // // //   }
// // // // }
// // // // Person.prototype.age = 10;
// // // // function content(obj){
// // // //   function F(){}
// // // //   F.prototype = obj;
// // // //   return new F();
// // // // }
// // // // var sup = new Person();

// // // // function subobject(obj) {
// // // //   var sub = content(obj);
// // // //   sub.name = 'gar';
// // // //   return sub;
// // // // }
// // // // var sup2 = subobject(sup)
// // // // console.log(typeof subobject); // function
// // // // console.log(typeof sub2)       // object
// // // // console.log(sup2.name)         // "gar"


// // // // // 原型式继承
// // // // function Person (name) {
// // // //   this.name = name;
// // // //   this.sum = function () {
// // // //     console.log(this.name)
// // // //   }
// // // // }

// // // // Person.prototype.age = 10;

// // // // function content (obj) {
// // // //   function F () {}
// // // //   F.prototype = obj;
// // // //   return new F();
// // // // }
// // // // var sup = new Person();
// // // // function subObject (obj) {
// // // //   var sub = content(obj);
// // // //   sub.name = 'gry';
// // // //   return sub
// // // // }

// // // // var sub2 = subObject(sup);
// // // // console.log(sub2.name)
// // // // console.log(typeof subObject)
// // // // console.log(typeof sub2)

// // // // // 寄生组合式继承
// // // // function Person (name) {
// // // //   this.name = name;
// // // //   this.sum = function () {
// // // //     console.log(this.name)
// // // //   }
// // // // }
// // // // Person.prototype.age = 10;
// // // // // 寄生
// // // // function  content (obj) {
// // // //   function F () {}
// // // //   F.prototype = obj;
// // // //   return new F();
// // // // }
// // // // // content就是F实例的另一种表示法
// // // // var con = content(Person.prototype);
// // // // // con实例（F实例）的原型继承了父类函数的原型
// // // // // 上述更像是原型链继承，只不过继承了原型属性

// // // // // 组合
// // // // function Sub(){
// // // //   Person.call(this) // 这个继承了父类构造函数的属性
// // // // }  // 解决了组合式两次调用构造函数属性的缺点
// // // // // 重点
// // // // Sub.prototype =  con; // 继承了con实例
// // // // con.constructor = Sub; // 一定要修复实例
// // // // var sub1 = new Sub();
// // // // // Sub的实例就继承了构造函数属性, 父类实例， con的函数属性
// // // // console.log(sub1.age)



// // // // function Person (name) {
// // // //   this.name = name;
// // // //   this.sum = function () {
// // // //     console.log(this.name)
// // // //   }
// // // // }
// // // // Person.prototype.age =  10;
// // // // 原型链继承
// // // // function Per () {
// // // //   this.name = 'hello'
// // // // }

// // // // Per.prototype = new Person ();
// // // // var per1 = new Per();

// // // // console.log(per1.age) // 10
// // // // console.log(per1.name) // hello

// // // // 构造函数
// // // // function Per () {
// // // //   Person.call(this,'Kery')
// // // //   this.age = 12
// // // // }
// // // // var per1 = new Per();
// // // // console.log(per1.name);
// // // // console.log(per1.age);

// // // // 组合继承 
// // // // function SubType () {
// // // //   Person.call(this, 'Hello123');
// // // // }

// // // // SubType.prototype = new Person()
// // // // var  sub = new SubType();
// // // // console.log(sub.name)
// // // // console.log(sub.age)

// // // // 原型式继承
// // // // function content (obj) {
// // // //   function F() {}
// // // //   F.prototype = obj;
// // // //   return new F()
// // // // }

// // // // var sup = new Person()
// // // // var sup1 = content(sup);

// // // // console.log(sup1.age)

// // // // 寄生式继承
// // // // function content (obj) {
// // // //   function F() {}
// // // //   F.prototype = obj;
// // // //   return new F();
// // // // }

// // // // function SubObject (obj) {
// // // //   var sub = content(obj);
// // // //   sub.name = 'sub-name';
// // // //   return sub
// // // // }

// // // // var sup = new Person();
// // // // var sup2 = SubObject(sup);
// // // // console.log(typeof content)
// // // // console.log(typeof sup2)
// // // // console.log(sup2.name)

// // // // 寄生组合式继承
// // // // function content (obj){
// // // //   function F () {}
// // // //   F.prototype = obj;
// // // //   return new F()
// // // // }

// // // // var con = content(Person.prototype);

// // // // function SubObject () {
// // // //   Person.call(this)
// // // // }
// // // // Sub.prototype = con;
// // // // con.constructory = Sub;

// // // // var sub = new Person


// // // // 寄生式继承
// // // // function content (obj) {
// // // //   function F () {}
// // // //   F.prototype = obj;
// // // //   return new F()
// // // // }

// // // // var sup = new Person();


// // // // function SubObject (obj) {
// // // //   var sub = content(obj);
// // // //   sub.name = "syel";
// // // //   return sub
// // // // }

// // // // var sub2 = new SubObject(sup);
// // // // console.log(sub2.name)
// // // // console.log(sub2.age)

// // // // 寄生组合式继承（常用）

// // // // function content (obj) {
// // // //   function F () {}
// // // //   F.prototype = obj;
// // // //   return new F()
// // // // }

// // // // var con = content(Person.prototype);

// // // // function Sub (name) {
// // // //   Person.call(this,name)
// // // // }

// // // // Sub.prototype = con;
// // // // con.constructor = Sub;

// // // // var sub = new Sub('张三丰');
// // // // console.log(sub.name)
// // // // console.log(sub.age)


// // // // 寄生组合继承（常用）

// // // // function Person (name){
// // // //   this.name = 'name';
// // // //   this.sub = function(){
// // // //     console.log(this.name)
// // // //   }
// // // // }

// // // // Person.prototype.age = 18;


// // // // function content(obj){
// // // //   function F () {}
// // // //   F.prototype  = obj
// // // //   return new F()
// // // // }

// // // // var con = content(Person.prototype)


// // // // var Sub = function () {
// // // //   Person.call(this)
// // // // }

// // // // Sub.prototype = con;
// // // // con.constructor = Sub;

// // // // var sub = new Sub();
// // // // console.log(sub.age)

// // // // function Person (name){
// // // //   this.name = 'name';
// // // //   this.sub = function(){
// // // //     console.log(this.name)
// // // //   }
// // // // }
// // // // Person.prototype.age = 18;

// // // // function Sup () {

// // // // }

// // // // Sup.prototype = new Person()

// // // // var sup = new Sup();
// // // // console.log(sup.age)

// // // // function Person (name){
// // // //   this.name = 'name';
// // // //   this.sub = function(){
// // // //     console.log(this.name)
// // // //   }
// // // // }
// // // // Person.prototype.age = 18;

// // // // function Sup (name) {
// // // //   Person.call(this);
// // // //   this.name = 'kit'
// // // // }

// // // // var sup = new Sup()
// // // // console.log(sup.name)
// // // // console.log(sup.age)

// // // // function Sup () {
// // // //   Person.call(this)
// // // // }

// // // // Sup.prototype = new Person()

// // // // var sup = new Sup();

// // // // console.log(sup.age)

// // // // function content (obj) {
// // // //   function F(){}
// // // //   F.prototype = obj
// // // //   return new F()
// // // // }

// // // // var sup = new Person()
// // // // var sup1 = content(sup)
// // // // console.log(sup1.age)


// // // // 寄生式继承

// // // // function content (obj) {
// // // //   function F(){}
// // // //   F.prototype = obj
// // // //   return new F()
// // // // }

// // // // var sup = new Person()

// // // // function SubObject(obj) {
// // // //   var sub = content(obj);
// // // //   sub.name = "hello"
// // // //   return sub
// // // // }

// // // // var sup1 = new SubObject()

// // // // console.log(sup1.name)
// // // // console.log(SubObject)
// // // // console.log(sup1)


// // // // function fn(){
// // // //   var arr = [];
// // // //   for(var i = 0 ; i< 5 ; i++){
// // // //     arr[i] = function(){
// // // //       return i;
// // // //     }
// // // //   }
// // // //   return arr;
// // // // }
// // // // var list = fn();
// // // // // console.log(list)
// // // // for(var i = 0; i < list.length ; i++){
// // // //   console.log(list[i]())
// // // // }


// // // let Person = {}
// // // Object.defineProperty( Person, 'name', {
// // //   get: function(key, val){
// // //     console.log('将要读取obj.foo属性');
// // //     // return value
// // //   },
// // //   set: function (val, key) {
// // //     console.log('当前值为', val);
// // //   }
// // // })
// // // console.log(Person.name)
// // // Person.name  = 'rose'


// // class Person {
// //   constructor (name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //   static staticFn() {
// //     console.log('这里是私有的方法')
// //   }
// //   say() {
// //     console.log(`My name is ${this.name}`)
// //   }
// // }

// // // let man = new Person("Tom", 31)

// // // console.log(man.name)
// // // console.log(man.age)

// // // Person.staticFn()
// // // man.staticFn()

// // // man.say();

// // // class Man extends Person{
// // //   constructor(name,age){
// // //     super(name,age)
// // //     this.hobbys = []
// // //     this.initHobbys()
// // //   }

// // //   manSay () {
// // //     console.log(`My name is ${this.name}. I'm ${this.age} years old`)
// // //   }

// // //   initHobbys(){
// // //     this.hobbys = ['Monery', 'cars', 'befautle wenman']
// // //   }
// // // }

// // // let man = new Man('Tom', 18)

// // // // man.manSay()
// // // console.log(man.hobbys)

// // // 浅拷贝
// // let obj1 = { name: '123' }
// // let obj2 = { age: 18 }
// // let obj3 = Object.assign(obj1,obj2);
// // obj1.name = '修改了名字'
// // console.log(obj3)


// // var funObj = {
// //   name: '拷贝对象',
// //   fun(){
// //     console.log('123')
// //   }
// // }


// // let funObj1 = funObj
// // funObj.name = '被修改了'

// // const cloneObject = (obj) => {
// //   if(typeof obj !== 'object'){
// //     return obj
// //   } else {
// //     let objnew = {}
// //     for(let key in obj) {
// //       objnew[key] = cloneObject(obj[key])
// //     }
// //     return objnew
// //   }
// // }

// // let funObj2 = cloneObject(funObj)
// // console.log(funObj2)



// // let arr = [{name:1},{name:2},{name:3}]; // 1,1,2,3,4,5,5,6
// // let res = arr.reduce((c,u) => {
// //   return c + u.name
// // }, 0)

// // console.log(res)

// // let names = ['peter', 'tom', 'mary', 'bob', 'tom', 'peter'];
// // let res = names.reduce( (per, cur) => {
// //   per[cur] = per[cur] ? per[cur] + 1 : 1
// //   return per
// // }, {})

// // console.log(res)


// let arr = [[0, 1], [2, 3], [4, [5, 6, 7]]]
// // let arrNew = [];
// // const fun = (arr) => {
// //   for(let item of arr){
// //     if(Array.isArray(item)){
// //       fun(item)
// //     } else {
// //       arrNew.push(item)
// //     }
// //   }
// //   return arrNew
// // }

// let newArr = (arr) => {
//   return arr.reduce((per, cur) => per.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
// }

// console.log(newArr(arr))




console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// 1 7 6 8 2 4 9 11 3 5 10 12
// 1 7 6 8 2 4 3 5 9 11 10 12
// 1 7 6 8 2 4 9 11 3 10 5 12

