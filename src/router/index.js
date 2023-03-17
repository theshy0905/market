import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routers'

Vue.use(VueRouter);


//先把vueRouter原型对象的push,先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace
// 第一个参数:告诉原来的push方法 ，往哪里跳
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }

}


export default new VueRouter({
    //配置路由
    routes,

    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
})