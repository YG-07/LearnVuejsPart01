//小红的js文件

;var moduleB=(function () {
  var name='小红'
  var age=25
  var flag=false
  function sub(num1,num2) {
    return num1-num2
  }
})()

//导出
moduleB.exports={
  name:name,
  age:age,
  flag:flag,
  sub:sub
}