<template>
<div class="aside">
  <ul>
    <li @click="menu1">手机</li>
    <li @click="menu2">电脑</li>
    <li @click="menu3">笔记本</li>
    <li>手机</li>
    <li>电脑</li>
    <li>笔记本</li>
    <li>手机</li>
    <li>电脑</li>
    <li>笔记本</li>
    <li>手机</li>
    <li>电脑</li>
    <li>笔记本</li>
  </ul>
</div>
</template>
<script>
import Msg from  '../views/Msg.js'
export default {
     methods:{
         menu1(){
             Msg.$emit('val',1)
         },
         menu2(){
             Msg.$emit('val',2)
         },
         menu3(){
             Msg.$emit('val',3)
         }
     }
}
</script>
<style scoped>
 .aside ul{
  list-style: none;
}
 .aside ul li{
  display: block;
  background: #fff;
  width: 100px;
  height: 50px;
  margin-bottom: 8px;
  text-align: center;
}
</style>>

