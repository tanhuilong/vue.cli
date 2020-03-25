<template>
<div class="hello">
 <div class="top">
   <div class="top-nav">
   <div class="left">
  <li><a href="#">喵，欢迎来到天猫</a></li>
  <li><a href="#">请登入</a></li>
  <li><a href="#">免费注册</a></li>
   </div>
   <div class="right">
    <li><a href="#">我的淘宝<i class="el-icon-arrow-down" ></i></a></li>
    <li><a href="#"><i class="el-icon-shopping-cart-full danger" ></i>购物车</a></li>
    <li><a href="#">收藏夹<i class="el-icon-arrow-down" ></i></a></li>
    <li><a href="#"><i class="el-icon-mobile-phone danger" ></i>手机版</a></li>
    <li><a href="#">淘宝网</a></li>
    <li><a href="#">商家支持<i class="el-icon-arrow-down" ></i></a></li>
    <li><a href="#"><i class="el-icon-s-fold danger" ></i>网站导航<i class="el-icon-arrow-down" ></i></a></li>
   </div>
   </div>
   <div class="top-bot">  
  <el-input placeholder="搜索 天猫 商品" v-model="input">
    <template slot="append">搜索</template>
  </el-input>
   </div>
 </div>
 <div class="main">
<el-container>
  <el-aside>Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
 </div>
</div>
</template>

<script>
export default {
 data(){
   return{
     input:''
   }
 }
}
</script>


<style scoped >
.top-nav{
  height: 36px;
  overflow: hidden;
  width: 1203px;
  margin: 0 auto;
}
.left{
  float: left;
}
.left ul,.right ul{
  list-style: none;
}
.left ul li,.right ul li{
  display: inline-block;
  width:80px;
}
.left ul li a,.right ul li a{
font:12px bold gray;
text-align: center;
height: 35px;
line-height: 35px;
}
.right{
  float: right;
}
.el-input {
    width: 800px;
    margin: 40px auto;
    cursor: pointer;
    height: 40px;
    border: 2px solid red;
  }
  .template{
    width:100px;
    height: 40px;
    background: red;
    color: white;
  }
  .el-aside{
    width: 200px;
  }
</style>
