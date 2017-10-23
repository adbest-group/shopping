import * as types from './mutation-types'
import * as api from './api'
import axios from 'axios'

//todo  catch 错误和  res 中的判断

//获取热词
export const getHotWords = ({ commit }) => {
   api.fetchHotWords().then(({data}) => {
      if(data.code==0)commit(types.GET_HOT_WORDS, data.result.list)
    })
}

//获取商品列表
export const getGoodsList = ({ commit }, payload) => {
  api.fetchGoodsList(payload).then(({data}) => {
    if(data.code==0)commit(types.GET_GOODS_LIST, data.result)
  })
}

//通过关键字 获取商品列表
export const getSearchList = ({ commit }, payload) => {
  api.fetchSearchList(payload).then(({data}) => {
    if(data.code==0)commit(types.GET_GOODS_LIST, data.result)
  })
}

//获取商品详情
export const getGoodsDetail = ({ commit }, payload) => {
  api.fetchGoodsDetail(payload).then(({data}) => {
    commit(types.GET_GOODS_DETAIL, data.result)
  })
}

//获取top10 商品
export const getHotGoods = ({ commit }) => {
  api.fetchHotGoods().then(({data}) => {
    if(data.code==0)commit(types.GET_HOT_GOODS, data.result.list)
  })
}

//获取商城
export const getMalls = ({ commit }) => {
  api.fetchMalls().then(({data}) => {
    if(data.code==0)commit(types.GET_MALLS, data.result.list)
  })
}

//获取商品类别
export const getCategorys = ({ commit }) => {
  api.fetchCategorys().then(({data}) => {
    if(data.code==0)commit(types.GET_CATEGORYS, data.result.list)
  })
}


//获取新增商品的条目数
export const getGoodsNotify = ({ commit },payload) => {
  api.fetchGoodsList(payload).then(({data}) => {
    if(data.code==0)commit(types.GET_GOODS_NOTIFY, data.result.totalCount)
  })
}

//用户行为统计记录
export const getBehaviorAdd = ({ commit },payload) => {
  api.fetchBehaviorAdd(payload).then(({data}) => {
      console.log('用户行为已上传');
  })
}

//用户增加点赞数
export const getThumbsAdd = ({ commit },payload) => {
  api.fetchThumbsAdd(payload).then(({data}) => {
    if(data.code==0)commit(types.GET_THUMBS_ADD,{data:data.result,payload:payload} )
  })
}

