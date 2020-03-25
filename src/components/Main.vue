<template>
    <div>
        <div v-if="kk=1"> 
             <Cai :Cai="1"></Cai> 
             </div>
               <div v-else-if="kk=2"> 
             <Cai :Cai="2"></Cai> 
             </div>
               <div v-else-if="kk=3"> 
             <Cai :Cai="3"></Cai> 
             </div>
    </div>
</template>
<script>
import Msg from  '../views/Msg.js'
import Cai from  './Cai.vue'
export default {
    components:{
    Cai
    },
    data(){
        return{
            kk:0
        }
    },
    mounted(){
       var _this=this;
       Msg.$on('val',item=>{
           _this.kk=item
       })
    }
}
</script>
<style scoped>

</style>