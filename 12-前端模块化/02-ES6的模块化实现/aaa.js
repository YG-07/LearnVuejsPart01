var name='小明'
var age=23
var flag=true
function sum(num1,num2) {
  return num1+num2
}

if(flag){
  console.log(sum(12, 40));
}

//1.导出 整个
export {
  flag,sum
}

//2.变量导出,定义时就导出
export var num1=65
export var height=1.70

//3.导出函数/类
export function bi(n1,n2) {
  return n1/n2/n2
}
export class Person{
  run(){
    console.log('导出成功');
  }
}

//4.导出变量命名

const address='成都'
//这种default只能有一个
export default address
var myEmail='abc@123.com'
export {
  myEmail as email
}