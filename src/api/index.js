import requests from "./request";

import mockRequests from "./mock"

// 三级联动接口
export const reqCategoryList = () =>     
    // 发请求：axios发请求返回结果是Promise对象
    requests({ url: "/product/getBaseCategoryList", method: "get" })

    //获取轮播图接口
    export const reqGetBannerList=() =>
     mockRequests({ url: "/banner", method: "get" })
    
