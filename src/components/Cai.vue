<template>
    <div class="cai">
         <ul>
             <li v-for='(Cai,index) in list' :key="index"><img :src="Cai.image" >
             <p>{{Cai.title}}</p>
             </li>
         </ul>
    </div>
</template>
<script>
export default {
    data(){
        var _this=this,
             url=""
          if(_this.Cai==1){
          _this.url="diannao.json"
        }
        else if(_this.Cai==2){
            _this.url="shouji.json"
        }
        else{
          _this.url="diannao.json"
        }
        _this.$http.get(url).then(res=>{
            _this.list=res.data
        })
       return{
           list:[]
       }
    },
    props:{
        Car:Number
    },
   watch:{
    Cai(){
       var _this=this,
             url=""
          if(_this.Car==1){
          _this.url="diannao.json"
        }
        else if(_this.Car==2){
            _this.url="shouji.json"
        }
        else{
          _this.url="diannao.json"
        }
        _this.$http.get(url).then(res=>{
            _this.list=res.data
        })
       return{
           list:[]
       }
    }
   }
}
</script>
<style scoped>

</style>>
 