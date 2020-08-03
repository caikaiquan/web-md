/**
 * 封装ajax请求
 * option传参对象
 * **/
let jsonpIndex = 1000;
// 传参处理
const formatParams = (option) => {
  let params = option.params || {};
  let paramsArr = [];
  for (let key in params) {
    paramsArr.push(`${key}=${params[key]}`)
  }
  if (option.dataType === 'JSONP' || option.dataType === 'jsonp') {
    jsonpIndex++;
    let callback = option.callback || 'callback';
    option.callback = callback+jsonpIndex;
    return paramsArr.join('&') + '&callback=' + callback+jsonpIndex;
  } else {
    return paramsArr.join('&');
  }
}

const ajax = (option) => {
  return new Promise((resolve, reject) => {
    option = option || {};
    // 请求类型默认GET 
    option.type = (option.type || "GET").toUpperCase();
    //响应数据格式，默认json
    option.dataType = option.dataType || "json";
    //options.data请求的数据
    option.params = formatParams(option);
    let xhr;
    // 兼容
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    } else if (window.ActiveXobject) {//兼容IE6以下版本
      // xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 处理jsonp请求
    if(option.type === 'GET' && option.dataType === 'jsonp'){
      let url = option.url+"?"+option.params;
      let script = document.createElement("script");
      script.src = url;
      document.body.appendChild(script);
      window[option.callback || 'callback'] = (data) =>{
        resolve(data)
      }
      return
    }

    // 设置请求方式和请求地址
    // 参数true 发送异步请求
    if (option.type === 'GET') {
      console.log(option.params, 'params')
      xhr.open(option.type, option.url + '?' + option.params, true)
      xhr.send() // send发送请求
    } else if (option.type === 'POST') {
      xhr.open(option.type, option.url, true)
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      xhr.send(option.params)
    }
    /**
     * readyState存有 XMLHttpRequest 的5种状态。从 0 到 4 发生变化。
     * 0: 请求未初始化
     * 1: 服务器连接已建立
     * 2: 请求已接收
     * 3: 请求处理中
     * 4: 请求已完成，且响应已就绪
     * **/
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        //判断是否请求成功(Http状态码大于等于200，且小于300，和状态码等于304为请求成功)
        let status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304) {
          let res = JSON.parse(xhr.response)
          resolve(res)
        } else {
          reject({ code: status, msg: "网络异常" })
        }
      }
    }
  })
}


export default ajax