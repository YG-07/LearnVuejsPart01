# LearnVuejsPart01
学习Vuejs的第一部分

### 一.资料整理来源  
coderwhy老师  B站账号：ilovecoding  
bilibili URL：https://space.bilibili.com/36139192  
视频(1-75p) URL：https://www.bilibili.com/video/BV15741177Eh?p=1
  
### 二、前端基础知识  
web前端三大主流框架都是Angular、React、Vue  
  
Vue的MVVM  
MVVM(Model-view-viewmodel)是一种软件架构模式。  
博客 URL：https://blog.csdn.net/qq_39088110/article/details/108668380  
  
### 三、本节知识大纲  
#
### 一.邂逅Vuejs  
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
    
 ### 二、插值语法  
 * mustache语法
 * v-once：固定显示第一次的值
 * v-html：解析html标签的字符串
 * v-text：类似mustache语法
 * v-pre：取消mustache语法解析
 * v-cloak：加载时不显示标签的内容
  
### 三、v-bind指令
#### 3.1 v-bind绑定属性
* v-bind:href
* v-bind:src
* 语法糖写法 :[属性名]
  
#### 3.2 v-bind动态绑定class
* 对象语法-:class='{类名1:布尔值1, 类名2:布尔值2, ...}'
* 数组语法-:class='[变量1, 变量2, ...]'
  
#### 3.3 v-bind动态绑定style
(用双引号避免如'px'这种字符串)
* 对象语法-:style="{color: 'green'}"
* 数组语法:style="[对象变量1, 对象变量2, ...]" 
  
### 四、计算属性  
#### 4.1计算属性computed
* 基本使用案例：拼接名字-this.firstName+' '+this.lastName;
* 复杂使用案例：拼接价格和符号-this.books[i].price



