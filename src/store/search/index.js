// search 模块的小仓库
import { reqGetSearchInfo } from "@/api"
// state：仓库存储数据的地方
const state = {
    searchList: {}
}
// mutations：修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
// actions：处理action，书写自己的业务逻辑、也可以处理异步
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }

    }
}
// getters：计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []; 
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    },
    attrsLiist(state) {
        return state.searchList.attrsLiist
    }


}

// 对外暴露
export default {
    state,
    mutations,
    actions,
    getters,
}
