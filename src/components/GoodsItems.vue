<template>
  <div id="goodItems">
    <div class="panel">
      <div class="product">
        <div v-for="p in goodsList" class="product-item">
          <router-link :to="`detail/${p.id}`" target="_blank">
            <div class="pic">
              <div class="subpic"><img :src="p.smallImageUrl"></div>
            </div>
            <p class="title">{{p.title}}</p>
            <p class="info">
              {{p.shortContent}}
            </p>
          </router-link>
          <a :href='p.url' class="tobuywordBtn" target="_blank">Link</a>
          <div class="rightmall">
            {{p.syncTime}}　<a class="mallBtn" :href='p.url' target="_blank" title="">{{p.mallName}}</a>
          </div>
        </div>
      </div>
    </div>
    <!--其他参数-->
    <!--{-->
    <!--"goodId":1,//商品编号-->
    <!--"title":"",//商品标题-->
    <!--"smallImageUrl",//商品列表图片-->
    <!--"price":"", //现价-->
    <!--"originalPrice":"",//原价-->
    <!--"discounts":"",//折扣信息-->
    <!--"coupons":"",//优惠券-->
    <!--"promoCode":"",//促销码-->
    <!--"mallName":"",//商城名称-->
    <!--"goodSourceName":"",//来源网站名-->
    <!--"shortContent":"",//内容描述，已截取-->
    <!--"url":"",//商品购买链接-->
    <!--"syncTime":""//同步时间-->
  </div>

</template>
<script>
  import {changeTime} from '../utils/utils';
  export default {
    name:'goodItems',
    props:{
      goodsList:{
        default:[]
      }
    },
  }
</script>

<style>

</style>

