<template>
<div>
 <div v-if="kk===1">
     <cai></cai>
 </div>
 <div v-else-if="kk===2">2</div>
 </div>
</template>
<script>
import Msg from '../../public/Msg.js'
import cai from './Cai'
export default{
    components:{
    cai
    },
   data () {
       return{
           kk:0
       }
   }, 
   mounted(){
       var _this=this;
       Msg.$on('val',e=>{
           console.log(678)
        _this.kk=e
       })
   }
}
</script>
<style lang="stylus" >

</style>