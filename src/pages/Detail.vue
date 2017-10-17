<template>
  <div>
    <top-search :hotWords='hotWords'></top-search>
    <div id="main" class="clearfix">
      <div id="sidebar">
        <right-banner></right-banner>
        <hot-goods :hotGoods='hotGoods'></hot-goods>
      </div>
      <div id="content">
        <crumbs></crumbs>
        <div class="product detail">
          <div class="detail-info">
            <div class="picInfo">
              <div class="pic">
                <div class="subpic"><img :src="goodsDetail.smallImageUrl"></div>
              </div>
              <a :href='goodsDetail.url' class="tobuywordBtn">Buy Now</a>
              <div class="rightmall">
                　{{changeTime(goodsDetail.syncTime)}}
             <a class="mallBtn" :href='goodsDetail.url' target="_blank" title="">{{goodsDetail.mallName}}</a>
              </div>
            </div>
            <div class="title">{{goodsDetail.title}}</div>
            <p>
              <span v-html="ignoreLink(goodsDetail.contentHtml)">
                 {{ignoreLink(goodsDetail.contentHtml)}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <gt-footer></gt-footer>

    <!--goodId":id,//商品编号-->
    <!--"title":"id为"+id+"标题",//商品标题-->
    <!--"smallImageUrl":"id为"+id+"商品列表图片",//商品列表图片-->
    <!--"price":"id为"+id+"现价", //现价-->
    <!--"originalPrice":"id为"+id+"原价",//原价-->
    <!--"discounts":"id为"+id+"折扣信息",//折扣信息-->
    <!--"coupons":"id为"+id+"优惠券",//优惠券-->
    <!--"promoCode":"id为"+id+"促销码",//促销码-->
    <!--"mallName":"id为"+id+"商城名称",//商城名称-->
    <!--"goodSourceName":"id为"+id+"来源网站名",//来源网站名-->
    <!--"shortContent":"id为"+id+"内容描述",//内容描述，已截取-->
    <!--"url":"id为"+id+"商品购买链接",//商品购买链接-->
    <!--"contentHtml":"id为"+id+"html格式内容",//html格式内容-->
    <!--"syncTime":"id为"+id+"同步时间"//同步时间-->
  </div>
</template>
<script>
  import TopSearch from '../components/TopSearch.vue'
  import HotGoods from '../components/HotGoods.vue'
  import Crumbs from '../components/Crumbs.vue'
  import RightBanner from '../components/RightBanner.vue'
  import gtFooter from '../components/Footer.vue'
  import { mapActions, mapState } from 'vuex'
  import {ignoreLink,changeTime} from '../utils/utils'

  export default{
    name:'detail',
    components:{
      TopSearch,
      HotGoods,
      RightBanner,
      Crumbs,
      gtFooter
    },
    computed: {
      ...mapState(['hotWords','hotGoods','goodsDetail'])
  },
  created () {
    this.$store.dispatch('getHotGoods');
    this.$store.dispatch('getHotWords')
    this.$store.dispatch('getGoodsDetail',{id:this.$route.params.id})
    },
  methods: {
    changeTime: function(time) {
      return changeTime(time);
    },
    ignoreLink:function (html){
      return ignoreLink(html)
    }
   }
  }
</script>

