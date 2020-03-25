<template>
  <div class="about">
    <el-input placeholder="请输入姓名" prefix-icon="el-icon-search" v-model="input2"></el-input>
    <div class="content">
      <el-container>
  <el-aside>
    <Aside></Aside>
  </el-aside>
  <el-container>
    <el-header><img src="../../public/img/top-main.png"/></el-header>
    <el-main><Main></Main></el-main>
  </el-container>
</el-container>
    </div>
  </div>
</template>
<script>
import Aside from '../components/Aside.vue'
import Main from '../components/Main.vue'
export default {
components:{
  Aside,
  Main
}
}
</script>
<style scope>
*{
  margin: 0;
  padding: 0;
}
.el-aside{
  width:100px;
  background:#f5f5f5;
}
.el-header img{
  width: 1000px;
  margin: 0 auto;
}
.el-main{
  width:1000px;
}

</style>