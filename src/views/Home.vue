<template>
 <div class="taobao">
  <div class="top">
    <el-container>
     <el-header  class="top-nav">
       <div class="left">
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" width="80px">
  <el-submenu index="1" >
     <template slot="title"><a href="https://www.ele.me" >中国大陆</a></template>
    <el-menu-item index="1-1"><a href="https://www.ele.me" >阿三</a></el-menu-item>
    <el-menu-item index="1-2"><a href="https://www.ele.me" >大臣</a></el-menu-item>
    <el-menu-item index="1-3"><a href="https://www.ele.me" >阿三</a></el-menu-item>
  </el-submenu>
  <el-menu-item index="2"><router-link to="/a"><el-button round><span>亲，请登入</span></el-button></router-link></el-menu-item>
  <el-menu-item index="3"><a href="#">免费注册</a></el-menu-item>
  <el-menu-item index="4"><router-link to="/H"><el-button round><span>手机逛淘宝</span></el-button></router-link></el-menu-item>
</el-menu>
       </div>
       <div class="right">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-submenu index="1">
     <template slot="title"><a href="https://www.ele.me" >我的淘宝</a> </template>
    <el-menu-item index="1-1"><a href="https://www.ele.me" >阿三</a></el-menu-item>
    <el-menu-item index="1-2"><a href="https://www.ele.me" >大臣</a></el-menu-item>
    <el-menu-item index="1-3"><a href="https://www.ele.me" >阿三</a></el-menu-item>
  </el-submenu>
  <el-menu-item index="2"><a href="#"><i class="el-icon-shopping-cart-full" ></i> 购物车</a></el-menu-item>
  <el-submenu index="3">
     <template slot="title"><a href="https://www.ele.me"><i class="el-icon-star-on"></i>收藏夹</a></template>
    <el-menu-item index="3-1"><a href="https://www.ele.me" >阿三</a></el-menu-item>
    <el-menu-item index="3-2"><a href="https://www.ele.me" >大臣</a></el-menu-item>
    <el-menu-item index="3-3"><a href="https://www.ele.me" >阿三</a></el-menu-item>
    </el-submenu>  
   <el-submenu index="4">
     <template slot="title"><a href="https://www.ele.me" > <span><i class="el-icon-s-fold"></i></span>网站导航</a></template>
    <el-menu-item index="4-1"><a href="https://www.ele.me" >阿三</a></el-menu-item>
    <el-menu-item index="4-2"><a href="https://www.ele.me" >大臣</a></el-menu-item>
    <el-menu-item index="4-3"><a href="https://www.ele.me" >阿三</a></el-menu-item>
  </el-submenu>
</el-menu>
       </div>
     </el-header>
     <el-main><img src="../../public/img/top-main.png"/></el-main>
     <el-footer>Footer</el-footer>
   </el-container>
  </div>
  <div class="main">

  </div>
  <div class="footer">

  </div>
 </div>
</template>

<script>

export default {
   data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped >

*{
  margin:0;
  padding:0;
}
a {
text-decoration: none;
font-size: 12px;
width:80px;
height: 35px;
line-height: 35px;
display:inline-block;
text-align: center;
color: gray;
}
ul{
  list-style: none;
}
.left{
  float:left;
}
.right{
  float:right;
}
.top-nav{
  background:#f5f5f5;
  height:35px;
}
.el-main{
  width:1203px;
  overflow: hidden;
}
span{
  color:red;
}
img{
  width:1203px;
  margin: 0 auto;
}

</style>