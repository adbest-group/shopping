import axios from 'axios'
import qs from 'qs';
import {apiUrl} from '../utils/Global'
//todo  post请求时 qs操作和 配置头参数 的公有化...

//配置axios 默认地址
const defaults = {
  baseURL: apiUrl,
  //baseURL: 'http://127.0.0.1:8085',
}
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
  return axios.post('/goods',d,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

//通过关键字获取 列表
export const fetchSearchList = (data) => {
  var d = qs.stringify(data);
  return axios.post('/search',d,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export const fetchGoodsDetail = (data) => {
  var d = qs.stringify(data);
  return axios.post('/goodsdetail',d,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}



