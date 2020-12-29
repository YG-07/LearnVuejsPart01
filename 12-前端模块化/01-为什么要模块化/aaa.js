//小明的js文件

;var ModuleA=(function () {
  var obj={}
  var name='小明'
  var age=23
  var flag=true
  function sum(num1,num2) {
    return num1+num2
  }

  obj.flag=flag
  obj.name=name
  obj.sum=sum
  return obj
})()