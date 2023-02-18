import requests from "./request";

// 三级联动接口
export const reqCategoryList = () =>
    // 发请求：axios发请求返回结果是Promise对象
    requests({ url: "/product/getBaseCategoryList", method: "get" })
