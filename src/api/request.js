// 对于axios进行二次封装
import axios from "axios"

import nprogress from "nprogress"
import "nprogress/nprogress.css"


// 利用axios对象的方法create，去创建一个axios实例
// 这里的request 就是 axios，在这里配置一下
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会默认有/api，不用自己写了
    baseURL: "/api",
    // 请求超时5s
    timeout: 5000,
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，在请求发出之前做一些事情；
requests.interceptors.request.use((config) => {
    // config：配置对象，其有一个重要属性：header请求头
    nprogress.start();
    return config;

})
// 响应拦截器：当服务器数据返回以后，可以处理一些事情。
requests.interceptors.response.use(((res) => {
    // 服务器响应成功的回调函数
    nprogress.done();
    return res.data;
}))


// 对外暴露
export default requests;
