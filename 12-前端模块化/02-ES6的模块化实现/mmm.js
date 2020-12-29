/*
import {flag,sum} from "./aaa.js";
import {num1,height,bi,Person} from "./aaa.js";
import addr from "./aaa.js"
import {email} from "./aaa.js";

//小明aaa.js的flag
if(flag){
  console.log('小明真棒！')
  console.log(sum(10, 2))
}

//导入函数和类
console.log(num1+' '+height)
var kg=parseFloat(num1)
var h2=parseFloat(height)

console.log(bi(kg,h2))
const p=new Person()
console.log(p.run());
console.log(typeof p);

//default导入方式，无大括号
console.log(addr);
console.log(email);

*/

//作为对象，统一导入
import * as info from "./aaa.js"

console.log(info);
console.log(info.email,info.sum(13,42))