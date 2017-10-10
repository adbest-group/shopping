import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.GET_HOT_WORDS] (state,  data ) {
        state.hotWords=data
  },
  [types.GET_GOODS_LIST] (state,  data ) {
    state.goodsList=data.list;
    state.goodsTotalCount=data.totalCount;
    state.goodsPageSize=data.pageSize;
    state.goodsPageIndex=parseInt(data.pageIndex);
  },
  [types.GET_GOODS_DETAIL] (state,  data ) {
    state.goodsDetail=data
  },
  [types.GET_HOT_GOODS] (state,  data ) {
    state.hotGoods=data
  },
  [types.GET_MALLS] (state,  data ) {
    state.malls=data
  },
  [types.GET_CATEGORYS] (state,  data ) {
    state.categorys=data
  },
}
