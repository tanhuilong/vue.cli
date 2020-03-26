<template>
  <div class="taobao">
    <div class="top">
      <div class="top-nav">
    <div class="left clearfloat">
    <ul >
      <li><a href="#">
        <el-dropdown :hide-on-click="false">
  <p class="el-dropdown-link">
    中国大陆<i class="el-icon-arrow-down el-icon--right"></i>
  </p>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>全球</el-dropdown-item>
    <el-dropdown-item>中国大陆</el-dropdown-item>
    <el-dropdown-item>港澳台</el-dropdown-item>
    <el-dropdown-item>美日韩</el-dropdown-item>
    <el-dropdown-item divided>欧非奥</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</a></li>
      <li><a href="#"><span>亲，请登入</span></a></li>
      <li><a href="#">免费注册</a></li>
      <li><a href="#">手机逛淘宝</a></li>
      </ul>
      </div>
      <div class="right">
      <ul>
      <li><a href="#">
        <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    我的淘宝<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>已买到的宝贝</el-dropdown-item>
    <el-dropdown-item>我的足迹</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </a></li>
      <li><a href="#"><i class="el-icon-shopping-cart-full "></i>购物车</a></li>
      <li><a href="#">
        <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    <i class=" el-icon-star-on"></i>收藏夹<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>收藏宝贝</el-dropdown-item>
    <el-dropdown-item>收藏店铺</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </a></li>
      <li><a href="#">商品分类</a></li>
      <li><a href="#">
        <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    千牛卖家中心<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>免费开店</el-dropdown-item>
    <el-dropdown-item>已卖出宝贝</el-dropdown-item>
    <el-dropdown-item>出手的宝贝</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </a></li>
        <li><a href="#">|</a></li>
      <li><a href="#">
         <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    联系客服<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>消费客服</el-dropdown-item>
    <el-dropdown-item>卖家客服</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </a></li>
      <li><a href="#"><i class="el-icon-s-fold"></i>网站导航</a></li>
    </ul>
    </div>
    <div class="top-mid">
      <img src="../public/img/top-mid.png" alt="">
    </div>
    <div class="top-btn">
     <div class="left">
   <img src="../public/img/top-btn.png" alt="">
     </div>
    <div >
  <el-input  
  style="width:700px;margin-top:40px;"
  placeholder="请输入内容" 
 prefix-icon="el-icon-search"
 suffix-icon="el-icon-date"
  v-model="input">
    <template slot="append">搜索</template>
  </el-input>
</div>
    </div>
    <div class="main ">
      <div class="header"><ha></ha></div>
   
   <div class="content">
     <div class="aside left"><ba></ba></div>
     <div class="about right"><about></about></div>
   </div>
    </div>
    </div>
      </div>

  </div>

</template>
<script>
import about from './components/About.vue'
import ha from './components/Ha.vue'
import ba from './components/Baa.vue'
export default {
  components:{
    about,
    ha,
    ba
  },
  data () {
    return{
      input:''
    }
  }
}
</script>

<style lang="less">
.left li,.right li{
  float:left;
}
.left li a,.right li a{
  color:gray;
 
  font-size: 14px;
  margin-left:5px;
  height: 35px;
  line-height: 35px;
}
.left li a span{
  color:red;
}
.left{
  margin-left:30px;
}
.right{
  margin-right: 30px;
}
.top-mid img{
  width: 1203px;
  margin-top:0 ;
  margin-left:35px;
  z-index: -10;
}
.left img{
  width:220px;
}
.main{
  width: 1203px;
  margin: 50px auto;
}
.aside{
  width:170px;
  height: 500px;
  border:1px solid red;
}
.content{
  width:1200px;
  margin: 0 auto;
}
.header{
  margin-left: 31px;
  width:1140px;
  height:35px;
  background:red;
}
.about{
  width: 950px;
  height: 500px;
}
</style>
