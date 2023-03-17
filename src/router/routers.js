
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

//路由配置信息
export default [
  
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: "/home",
            component: Home,
            //
            meta: { show: true }
        },
        {
            path: "/search/:keyword",
            component: Search,
            meta: { show: true },
            //对象形式路由传递参数
            name: "search",

        },
        {
            path: "/detail/:skuid",
            component: Detail,
            meta: { show: true }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "*",
            component: Home
        }


    



]