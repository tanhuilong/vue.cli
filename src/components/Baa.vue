<template>
<div class="lei">
<ul>
    <li @mouseover="menu1"><a href="#">女装/男装/内衣</a></li>
    <li  @mouseover="menu2"><a href="#">祖娥子/苏代价</a></li>
    <li><a href="#">阿斯顿/点击</a></li>
    <li><a href="#">撒娇/山东化工</a></li>
    <li><a href="#">调查/地方/是的</a></li>
    <li><a href="#">瑞芳/股份认购</a></li>
    <li><a href="#">微软/按附件哈</a></li>
    <li><a href="#">女装/男装/内衣</a></li>
    <li><a href="#">祖娥子/苏代价</a></li>
    <li><a href="#">阿斯顿/点击</a></li>
    <li><a href="#">撒娇/山东化工</a></li>
    <li><a href="#">调查/地方/是的</a></li>
    <li><a href="#">瑞芳/股份认购</a></li>
    <li><a href="#">微软/按附件哈</a></li>
</ul>
     </div>
</template>
<script>
import Msg from '../../public/Msg.js'
export default{
    methods:{
        menu1 (){
        Msg.$emit('val',1)
        },
         menu2 (){
        Msg.$emit('val',2)
        }
    }
}
</script>
<style >
 .lei li a{
     width: 145px;
     display: block;
     height: 35px;
     line-height: 35px;
     padding-left:20px;
 }
 
 .lei li a:hover{
     color:red;
     background: #ffe4dd;
 }
</style>>

