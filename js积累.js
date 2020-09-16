// 图片转base64
function getImageBase64(img, ext) {
   var canvas = document.createElement("canvas"); //创建canvas DOM元素，并设置其宽高和图片一样
   canvas.width = img.width;
   canvas.height = img.height;
   var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0, img.width, img.height); //使用画布画图
   var dataURL = canvas.toDataURL("image/" + ext); //返回的是一串Base64编码的URL并指定格式
   canvas = null; //释放
   return dataURL;
}
let str = getImageBase64(document.querySelector('img'), 'png')

// 获取本机ip
let getIPAdress = () => {
   const interfaces = require('os').networkInterfaces();
   let address;
   for (let key in interfaces) {
      interfaces[key].forEach(item => {
         if (item.family === 'IPv4' && item.address !== '127.0.0.1' && item.internal !== true) {
            address = item.address;
         }
      })
   }
   return address;
}

// cookie读取
function getCookie(name) {
   var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
   if (arr = parent.document.cookie.match(reg)) {
      return unescape(arr[2]);
   } else {
      return null;
   }
}


// 数字转化成千分位显示
let arr = [1.00, 2.33, 999.99, 1034.12, 1004.12, 1234567.21, 1123456789.23];
const handleNumShow = (text) => {
  if (text >= 1000) {
    if (text >= 1000000000) {
      let yw = Math.floor(text / 1000000000)
      text = Math.floor((text - yw * 1000000000) * 100) / 100
      let qw = Math.floor(text / 1000000);
      qw = qw < 10 ? '00' + qw : qw < 100 ? '0' + qw : qw;
      text = Math.floor((text - qw * 1000000) * 100) / 100
      let bw = Math.floor(text / 1000);
      if (bw < 10) {
        bw = "00" + bw;
      } else if (bw < 100) {
        bw = "0" + bw;
      }
      let gw = Math.floor((text - bw * 1000) * 100) / 100;
      if (gw < 10) {
        gw = "00" + gw;
      } else if (gw < 100) {
        gw = "0" + gw;
      }
      return `${qw},${bw},${gw}`
    }
    if (text >= 1000000) {
      let qw = Math.floor(text / 1000000);
      text = Math.floor((text - qw * 1000000) * 100) / 100
      let bw = Math.floor(text / 1000);
      if (bw < 10) {
        bw = "00" + bw;
      } else if (bw < 100) {
        bw = "0" + bw;
      }
      let gw = Math.floor((text - bw * 1000) * 100) / 100;
      if (gw < 10) {
        gw = "00" + gw;
      } else if (gw < 100) {
        gw = "0" + gw;
      }
      return `${qw},${bw},${gw}`
    }
    if (text >= 1000) {
      let bw = Math.floor(text / 1000);
      let gw = Math.floor((text - bw * 1000) * 100) / 100;
      if (gw < 10) {
        gw = "00" + gw;
      } else if (gw < 100) {
        gw = "0" + gw;
      }
      return `${bw},${gw}`
    }
  } else {
    return text
  }
}

// 数字转化成千分位显示优化方案
// '1323121999.21'
const handleNumShow = (num) => {
  if (!num || num === '0') {
    return num
  }
  num = String(num).split('').reverse();
  let index = num.indexOf('.');
  let numNew = '';
  let numStep = 0;
  for (let i = 0; i < num.length; i++) {
    if (i <= index) {
      numNew += num[i]
    } else {
      if (numStep === 3) {
        numStep = 0;
        numNew = numNew + "," + num[i]
      } else {
        numNew += num[i]
      }
      numStep++;
    }
  }
  numNew = numNew.split('').reverse().join("")
  return numNew
}
