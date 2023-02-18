import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

//三级联动组件+全局组件
import TypeNav from '@/pages/Home/TypeNav'
//第一个参数全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
