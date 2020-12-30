# LearnVuejsPart01
学习Vuejs的第一部分  
  
### 一.资料整理来源  
coderwhy老师  B站账号：ilovecoding  
bilibili URL：https://space.bilibili.com/36139192  
视频(1-51p) URL：https://www.bilibili.com/video/BV15741177Eh?p=1
  
### 二、前端基础知识  
web前端三大主流框架都是Angular、React、Vue  
  
Vue的MVVM  
MVVM(Model-view-viewmodel)是一种软件架构模式。  
博客 URL：https://blog.csdn.net/qq_39088110/article/details/108668380  
  
### 三、本节知识大纲  
#
(数字表示视频URL分p)  
### 一.邂逅Vuejs (1-12)  
#### 1.1 认识Vuejs
* 什么是Vuejs
* Vue的渐进式
* Vue的特点
  
#### 1.2 安装Vue  
安装方式：  
* 1.直接下载Vue.js Vue 官网：https://cn.vuejs.org/  
* 2.CDN引入
* 3.npm安装Vue模块 
#### 1.3 Vue的初使用  
* Hello Vuejs  
  * Vue实例的el，data属性
  * mustache语法，体验响应式  
* Vue的列表展示  
  * v-for  
  * 通过Vue实例的数组修改元素
* Vue的计数器小案例
  * v-on:click或@click
  * Vue实例的methods属性
  
#### 1.4 了解Vue的MVVM
  
#### 1.5 了解Vue的options
* 除以上属性，生命周期函数
  
 ### 二、插值语法 (13-14)  
 * mustache语法
 * v-once：固定显示第一次的值
 * v-html：解析html标签的字符串
 * v-text：类似mustache语法
 * v-pre：取消mustache语法解析
 * v-cloak：加载时不显示标签的内容
  
### 三、v-bind指令 (15-20)  
#### 3.1 v-bind绑定属性
* v-bind:href
* v-bind:src
* 语法糖写法 :(属性名)
  
#### 3.2 v-bind动态绑定class
* 对象语法-:class='{类名1:布尔值1, 类名2:布尔值2, ...}'
* 数组语法-:class='[变量1, 变量2, ...]'
  
#### 3.3 v-bind动态绑定style
(用双引号避免如'px'这种字符串)
* 对象语法-:style="{color: 'green'}"
* 数组语法:style="[对象变量1, 对象变量2, ...]" 
  
### 四、计算属性 (21-25)  
#### 4.1 计算属性computed
* 基本使用案例：拼接名字-this.firstName+' '+this.lastName;
* 复杂使用案例：拼接价格和符号-this.books[i].price
  
#### 4.2 计算属性本质
* fullname:{set(), get()}

#### 4.3 计算属性和方法区别
* 计算属性和方法的执行结果一样
* 计算属性使用时有缓存，只有值发生改变才会重新调用；而方法每次使用都会重新执行
  
### 五、ES6的补充（了解） (26-29)  
#### 5.1 let和var的作用域
#### 5.2 三种作用域方案
* ES5没有闭包(错误操作)
* ES5有闭包
* ES6的let
  
#### 5.3 ES6的基本语法
* const用法
* 对象的字面量-{}
* 对象的赋值.先定义并赋值变量,然后赋值对象-{变量1, 变量2, ...}
* 对象里的函数-{变量:func(){...}}
  
### 六、事件监听 (30-32)
#### 6.1 事件监听的基本使用
#### 6.2 事件方法的参数问题(定义-调用)
* btnClick() - btnClick
* btnClick(event) - btnClic 省略时默认传入当前事件 
* btnClick(a,event) - btnClick(a,$event)
    
#### 6.3 v-on的修饰符
* .stop 阻止冒泡(如:避免多层元素，由内到外的冒泡)
* .prevent修饰符 拦截默认事件(如:跳转页面时的警告)
* .once 某个元素只能操作一次(如:点赞)
* 了解2个
  * .{keyCode | keyAlias} 只当事件是从特定键触发时回调(如:松开回车键:@keyup.enter=方法)
  * .native 监听组件根元素的原生事件
  
### 七、条件判断 (33-36)
#### 7.1 v-if / v-else-if / v-else 的使用
#### 7.2 案例1:成绩等级 2种方式
#### 7.3 案例2:用户登录方式
#### 7.4 v-if和v-show的区别
* 不显示时，show的元素添加display:none，if的元素不存在DOM里
* 当需要在显示与隐藏之间切片很频繁时，使用v-show
  
### 八、循环遍历 (37-45)
#### 8.1 v-for遍历
* (item) 直接使用值
* (item,index) 分别是值和下标，下标可省略
* (value,key,index)值、键和下标，key、index可省略
  
#### 8.2 v-for添加v-bind:key属性
* 添加key值，不同相同
* 数组.splice(开始位置，修改\删除个数，添加的元素)
  
#### 8.3 数组哪些操作是响应式的
* 响应式的
  * .splice 修改函数
  * .push 添加到最后一个元素
  * .unshift 添加到最前一个元素
  * .pop 删除最后一个元素
  * .shift 删除最前一个元素
  * .sort 升序排序
  * .reverse 倒序
* 不是响应式的
  * 通过索引赋值修改元素(除非是对象里的数组)
  
#### 8.4 案例：书籍购物车界面
作业项目Git URL：https://github.com/YG-07/VuejsProgram.git  
视频 URL：https://www.bilibili.com/video/BV15741177Eh?p=41  
知识点：  
* 1.可以增加和减少购买数量，v-bind:click
* 2.可以移除书籍，全部移除显示提示，v-if和v-else
* 3.购买数量至少为1，减少按钮不可用，v-bind:disabled="book.count<=1"
* 4.总价格使用计算属性，computed
* 5.(了解)filters过滤器
  * 与运算调用{{book.price | showPrice}}
  * 类似函数定义；.toFixed(保留小数位数)
  
#### 8.5 高阶函数
* .filter 过滤器函数
* .map 映射函数
* .reduce(function (preValue, n){...}) 汇总函数
  
### 九、v-model的原理和使用 (46-51)
#### 9.1 v-model的原理
原理：相当于先v-bind绑定value，v-on:input监听点击并输入事件
* :value="message" v-on:input="事件方法"
* event.target.value获取输入框的值
  
#### 9.2 radio类型(单选框)
* 多个v-model绑定同一个变量时，标签可以不用name值
  
#### 9.3 checkbox类型(复选框)
* 一个input标签时，绑定一个布尔值(如:勾选协议)
* 对多个标签时，绑定一个数组
  
#### 9.4 select类型（下拉菜单）
* v-model绑定select标签，多选时添加multiple属性(按住Ctrl多选)
* 多选的更好方案是v-for生成checkbox标签，并添加多个v-model和:value
  
#### 9.5 v-model的修饰符
* .lazy修饰符，失去焦点或回车时 才实时绑定值
* .number修饰符,转换Number类型 (v-model绑定时自动的string类型)
* .trim修饰符，它去除变量首尾多余空格 (浏览器加载时自动去除超过2个的多余空格，但变量的值仍有空格)
  
-----------------以上就是本项目文件夹全部知识-----------------  