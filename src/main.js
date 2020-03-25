import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.prototype.$http=axios
Vue.use(ElementUI);
Vue.config.productionTip = false


router.beforeEach((to,from,next)=>{
  console.log(store.state,"store.state")
  if(store.state.userInfo || to.path==='/login'){
    next()
  }
else{
  next({
    path:"/login"
  })
}
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
