import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//先把vueRouter原型对象的push,先保存一份
let originPush =VueRouter.prototype.push;
let originReplace =VueRouter.prototype.replace;
  
//重写push|replace
// 第一个参数:告诉原来的push方法 ，往哪里跳
VueRouter.prototype.push = function(location,resolve,reject) {
    if(resolve&&reject){
        originPush(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

VueRouter.prototype.replace= function(location,resolve,reject) {
     if(resolve&&reject){
       originReplace(this,location,resolve,reject) 
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }

}


export default new VueRouter({
    //配置路由
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:"/home",
            component:Home,
            //
            meta:{show:true}
        },
        {
            path:"/search/:keyword",
            component:Search,
            meta:{show:true},
            //对象形式路由传递参数
            name:"search",

        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path:"*",
            component:Home
        }
        

    ]

    //路由重定向
})