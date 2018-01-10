<template>
  <div v-title="title">
    <top-search :hotWords='hotWords' :behaviorFun='getBehaviorAdd'></top-search>
    <!-- <banner></banner> -->
    <banner-hot :list='hotGoods' :behaviorFun='getBehaviorAdd'></banner-hot>
    <div id="main" class="clearfix">
      <div id="sidebar">
        <right-banner></right-banner>
        <hot-goods :hotGoods='hotGoods' :behaviorFun='getBehaviorAdd'></hot-goods>
      </div>
      <div id="content">
        <navigation :malls="malls" :categorys='categorys' v-if="flag"></navigation>
        <a class="feednotify" v-if="goodsNotify>criticalNotifyNum"  @click="getGoodsList($route.query)">
          <span>●</span>
          <span>There are {{goodsNotify}} new entries for this view ></span>
        </a>
        <div v-if="goodsList">
          <goods-items :goodsList='goodsList' :behaviorFun='getBehaviorAdd' :getThumbsAdd="getThumbsAdd"></goods-items>
          <div class="load" v-if="loadFlag" >
            <div class="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="pageBar clearfix" id='pageBar'>
            <paginate
              ref="paginate"
              :page-range="5"
              :page-count="getPageCount"
              :click-handler="changePage"
              :prev-text="'&lt;&lt;'"
              :next-text="'&gt;&gt;'">
            </paginate>
          </div>
        </div>
        <div v-if="!goodsList" class="search_no">
          <div class="search_no_box">No corresponding discount information was found </div>
        </div>
      </div>
    </div>
    <gt-footer></gt-footer>
  </div>
</template>
<script>
  import TopSearch from '../components/TopSearch.vue'
  import BannerHot from '../components/BannerHot.vue'
  import Navigation from '../components/Navigation.vue'
  import GoodsItems from '../components/GoodsItems.vue'
  import HotGoods from '../components/HotGoods.vue'
  import RightBanner from '../components/RightBanner.vue'
  import gtFooter from '../components/Footer.vue'
  import Paginate from 'vuejs-paginate'
  import qs from 'qs';
  import { mapActions, mapState,mapGetters } from 'vuex'
  import { autoFetchTime, criticalNotifyNum,baseTitle } from '../utils/Global'

  export default{
  name:'index',
  components:{
    TopSearch,
    BannerHot,
    Navigation,
    GoodsItems,
    HotGoods,
    RightBanner,
    gtFooter,
    Paginate
  },
    data () {
      return {
        criticalNotifyNum: criticalNotifyNum,
        title:baseTitle,
        loadFlag:false,
        offsetTop:0,
        addPage:0,
      }
    },
    methods: {    //绑定事件的关键代码
      changePage: function(i){
        var obj =Object.assign({}, this.$route.query, {page:i})
        var d = qs.stringify(obj);
        this.$router.push({path:'/?'+d})
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      },
      ...mapActions([
        'getHotGoods',
        'getMalls',
        'getCategorys',
        'getHotWords',
        'getGoodsList',
        'getGoodsNotify',
        'getSearchList',
        'getBehaviorAdd',
        'getThumbsAdd',
        'getGoodsListScroll',
        'getSearchListScroll'
        ]),
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.offsetTop = document.querySelector('#pageBar').offsetTop
        if(scrollTop > this.offsetTop-600&&!this.loadFlag){
           const page = parseInt(this.$route.query.page||1)
           if(this.addPage>2||(page +this.addPage)%4===0){
             return
           }
           this.addPage++
           const newPage = page +this.addPage
           this.loadFlag = true;
           const newParam = Object.assign({},this.$route.query,{page:newPage})
           if(this.$route.query.key){
              this.getSearchListScroll(newParam).then(()=>{
                  setTimeout(()=>{ this.loadFlag = false},1000)
              })
           }else{
              this.getGoodsListScroll(newParam).then(()=>{
                  setTimeout(()=>{ this.loadFlag = false},1000)
              })
           }

        }

      },
      changePageIndex(){
        this.$refs.paginate.selected = this.currentPage
      }

    },
  computed: {
    ...mapGetters(['getPageCount']),
    ...mapState(['hotWords','goodsList','hotGoods','malls','categorys','goodsPageIndex','goodsNotify','maxId','maxSyncTime']),
    flag(){
      if(this.$route.query.key){return false}
      else return true;
    },
    currentPage(){
      return this.goodsPageIndex-1
    }
  },
  created () {
    this.getHotGoods();
    this.getMalls();
    this.getCategorys();
    this.getHotWords();
    if(this.$route.query.key){
      this.getSearchList(this.$route.query);
    }
    else {
      this.getGoodsList(this.$route.query);
    };

    //定时请求任务  获取新增条目数;
    this.intervalid = setInterval(() => {
        //原数据中没有 goodsList 或者 this.$route.query.key存在时 不求数据
        if(this.goodsList&&!this.$route.query.key){
          this.getGoodsNotify(Object.assign({},this.$route.query,{id:this.maxId,sync:this.maxSyncTime}));
       }
     },autoFetchTime);

  },
  watch:{
    '$route' (to, from) {
      if(to.query.key){
        this.addPage = 0
        this.getSearchList(to.query);
      }
      else{
        this.addPage = 0
        this.getGoodsList(to.query);
      }
    },
    'goodsNotify' (to,from) {
      if(to&&to>criticalNotifyNum){
        document.title = '(' + to + ' new entries) '+baseTitle;
      }else{
        document.title = baseTitle;
      }
    },
    currentPage(){
      this.changePageIndex()
    }
  },
  beforeDestroy () {
    clearInterval(this.intervalid)
    window.removeEventListener('scroll', this.handleScroll)
    },
  mounted () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

</script>
