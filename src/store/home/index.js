// home 模块的小仓库

import { reqCategoryList,reqGetBannerList} from "@/api"

// state：仓库存储数据的地方
const state = {
    categoryList:[],
    bannerList:[]
}
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
     state.bannerList=bannerList
    }
}
// actions：处理action，书写自己的业务逻辑、也可以处理异步
const actions = {
    async categoryList({commit}){
        //向服务器发送请求
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code ==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图数据
    async getBannerList({commit}){
        let result= await reqGetBannerList();
        console.log(result);
         if(result.code ==200){
             commit("GETBANNERLIST",result.data)
         }
    }
   

  
}
// getters：计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {}

// 对外暴露
export default {
    state,
    mutations,
    actions,
    getters,
}
