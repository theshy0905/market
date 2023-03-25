import requests from "./request";

import mockRequests from "./mock"

// 三级联动接口
export const reqCategoryList = () =>
    // 发请求：axios发请求返回结果是Promise对象
    requests({ url: "/product/getBaseCategoryList", method: "get" })

//获取轮播图接口
export const reqGetBannerList = () =>
    mockRequests({ url: "/banner", method: "get" })

//获取floor数据
export const reqFloorList = () =>
    mockRequests({ url: "/floor", method: "get" })

//获取搜索模块接口
// export const reqGetSearchInfo = (params) =>
//     mockRequests({ url: "/list", method: "post", data: { params } })
export const reqSearchList = (data) => requests({ url: "/list", method: 'post', data });

//获取产品详情接口
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get" })
//添加到购物车(对已有 物品进行数量 改动)
///api/cart/addToCart/{ skuId }/{ skuNum }  post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });
