<template>
  <div>
    <div v-title>home</div>
    <top-search :hotWords='hotWords'></top-search>
    <banner></banner>
    <div id="main" class="clearfix">
      <div id="sidebar">
        <right-banner></right-banner>
        <hot-goods :hotGoods='hotGoods'></hot-goods>
      </div>
      <div id="content">
        <navigation :malls="malls" :categorys='categorys' v-if="flag"></navigation>
        <goods-items :goodsList='goodsList'></goods-items>
        <div class="pageBar clearfix">
          <paginate
            :page-count="getPageCount"
            :click-handler="changePage"
            :force-page="goodsPageIndex-1"
            :prev-text="'&lt;&lt;'"
            :next-text="'&gt;&gt;'">
          </paginate>
        </div>
      </div>
    </div>
    <gt-footer></gt-footer>
  </div>
</template>
<script>
  import TopSearch from '../components/TopSearch.vue'
  import Banner from '../components/Banner.vue'
  import Navigation from '../components/Navigation.vue'
  import GoodsItems from '../components/GoodsItems.vue'
  import HotGoods from '../components/HotGoods.vue'
  import RightBanner from '../components/RightBanner.vue'
  import gtFooter from '../components/Footer.vue'
  import Paginate from 'vuejs-paginate'
  import qs from 'qs';
  import { mapActions, mapState,mapGetters } from 'vuex'

  export default{
  name:'index',
  components:{
    TopSearch,
    Banner,
    Navigation,
    GoodsItems,
    HotGoods,
    RightBanner,
    gtFooter,
    Paginate
  },

    methods: {    //绑定事件的关键代码
      changePage: function(i){
        var obj =Object.assign({}, this.$route.query, {page:i})
        var d = qs.stringify(obj);
        this.$router.push({path:'/?'+d})
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },
//    data() {
//      return {
//        flag(){
//          if(this.$route.query.key){return false}
//          else return true;
//        }
//      }
//    },

  computed: {
    ...mapGetters(['getPageCount']),
    ...mapState(['hotWords','goodsList','hotGoods','malls','categorys','goodsPageIndex']),
    flag(){
      if(this.$route.query.key){return false}
      else return true;
    }
  },
  created () {
    this.$store.dispatch('getHotGoods');
    this.$store.dispatch('getMalls');
    this.$store.dispatch('getCategorys');
    this.$store.dispatch('getHotWords');
    if(this.$route.query.key){
      this.$store.dispatch('getSearchList',this.$route.query);
    }
    else {
      this.$store.dispatch('getGoodsList',this.$route.query);
    }
  },
  watch:{
    '$route' (to, from) {
      if(to.query.key){
        this.$store.dispatch('getSearchList',to.query);
      }
      else{
        this.$store.dispatch('getGoodsList',to.query);
      }
    }
  }

  }
</script>

