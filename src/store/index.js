import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    goodsList:[],//商品列表
    goodsDetail:{},//商品详情
    //goodsState:{//商品搜索状态   暂时不要,数据保存在 query 中
    //  mall:'',//商城
    //  category:'',//类别
    //  page:'1',
    //},
    hotGoods:[],//热门商品
    hotWords:[],//热词
    malls:[],//商城
    categorys:[],//商品类别
    keyWord:'',//搜索关键词
    goodsTotalCount:0,
    goodsPageSize:1,
    goodsPageIndex:1,
    goodsNotify:0,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
