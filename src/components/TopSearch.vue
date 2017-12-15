<template>
  <div>
    <div class="headBar clearfix">
      <div class="headBar-inner">
        <div class="inner">
          <a href="javascript:;" class="logo" @click="gotoIndex"><img src="../assets/logo.png"></a>
          <div class="search">
            <div class="search-box">
              <input type="text" class="search-txt" v-model="search" @keyup.enter="doSearch">
              <span class="search-btn" @click="doSearch"></span>
            </div>
            <div class="hotword clearfix">
              <a v-for="(h,index) in hotWords" v-bind:class="{on:index%2 != 0}" @click="changePage(h.hotword)">{{h.hotword}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navBar clearfix">
      <div class="nav-inner">
        <ul>
          <li v-for="item in linkList" :key="item.name" :class="item.name===pathOn?'on':''"><router-link :to="item.link">{{item.name}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {createUrl} from '../utils/utils';
    export default {
      name:'topSearch',
      data(){
        return {
          search:'',
          linkList:[{link:"/",name:'Home'},{link:"/coupons",name:'Coupons'}]
        }
      },
      props:{
        hotWords:{
          default:[]
        },
        behaviorFun: {
          type: Function,
        },
        pathOn:{
          default:'Home'
        }
      },
      methods: {    //绑定事件的关键代码
        changePage: function(key){
          var d = createUrl({page:1,key:key});
          this.behaviorFun({type:3,url:this.$route.fullPath,key:key});
          this.$router.push({path:'/?'+d})
        },
        doSearch:function(){
          var text = this.search.trim();
          if(text){
            this.changePage(text)
//            this.search = '';
          }
        },
        gotoIndex: function(){
          var obj =Object.assign({}, this.$route.query, {page:1,key:''})
          var d = createUrl(obj);
          this.$router.push({path:'/?'+d})
        },
      },
      watch:{
        '$route' (to, from) {
          this.search=to.query.key;
        }
      },
      created () {
        this.search=this.$route.query.key;
      }

    }
</script>