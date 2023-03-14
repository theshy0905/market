import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

//三级联动组件+全局组件
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination';
//第一个参数全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination);
//引入组件Carousel
import Carousel from "@/components/Carousel"
Vue.component(Carousel.name, Carousel)

//引入mock数据模拟
import '@/mock/mockServe'
// 引入swiper样式
import "swiper/css/swiper.css"

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //把全部的请求函数：作为Vue.prototype的属性，组件实例可以获取
    //请求函数只需要注册一次，可以在组件当中使用。
    Vue.prototype.$API = API;
  }
  ,

  router, store
}).$mount('#app')
