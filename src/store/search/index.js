// search 模块的小仓库

// state：仓库存储数据的地方
const state = {a:1}
// mutations：修改state的唯一手段
const mutations = {}
// actions：处理action，书写自己的业务逻辑、也可以处理异步
const actions = {}
// getters：计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {}

// 对外暴露
export default {
    state,
    mutations,
    actions,
    getters,
}
