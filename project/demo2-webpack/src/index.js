import './css/index.css'
const img1 = require('./images/2.png')
console.log(img1)

let imgBox = document.getElementsByClassName('img-box')[0];
let img = new Image();
img.src = img1
imgBox.append(img);

console.log('index.js====打印输出')