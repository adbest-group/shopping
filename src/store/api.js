import axios from 'axios'
import qs from 'qs';
import {apiUrl} from '../utils/Global'
//todo  post请求时 qs操作和 配置头参数 的公有化...

//配置axios 默认地址
const defaults = {
  baseURL: apiUrl,
  //baseURL: 'http://127.0.0.1:8085',
  withCredentials:true//用户请求时带上cookie
}

// post请求的第三个参数...
//  {
//  headers: {
//    'Content-Type': 'application/x-www-form-urlencoded'
//  }
//}

Object.assign(axios.defaults, defaults)

export const fetchHotWords = () => {
  return axios.get('/hotwords')
}

export const fetchHotGoods = () => {
  return axios.get('/hotgoods')
}

export const fetchMalls = () => {
  return axios.get('/malls')
}

export const fetchCategorys = () => {
  return axios.get('/categorys')
}

//获取商品列表
export const fetchGoodsList = (data) => {
  var d = qs.stringify(data);
  return axios.post('/goods',d)
}

//通过关键字获取 列表
export const fetchSearchList = (data) => {
  var d = qs.stringify(data);
  return axios.post('/search',d)
}

//获取商品详情
export const fetchGoodsDetail = (data) => {
  var d = qs.stringify(data);
  return axios.post('/goodsdetail',d)
}

//用户行为统计记录  data参数
//type:1 点击详细 2 点击购买 3 搜索
//url:根目录开始的url
//goodId:相关商品的id
//key:搜索时用，关键字
export const fetchBehaviorAdd = (data) => {
  var d = qs.stringify(data);
  return axios.post('/behavior/add',d)
}

//增加点赞数
export const fetchThumbsAdd = (data) => {
  var d = qs.stringify(data);
  return axios.post('/goods/thumbs',d)
}



