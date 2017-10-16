<template>
  <div>
    <div class="headBar clearfix">
      <div class="headBar-inner">
        <div class="inner">
          <a href="#" class="logo"><img src="../assets/logo.png"></a>
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
          <li class="on"><router-link :to="'/'">Home</router-link></li>
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
        }
      },
      props:{
        hotWords:{
          default:[]
        }
      },
      methods: {    //绑定事件的关键代码
        changePage: function(key){
          var d = createUrl({page:1,key:key});
          this.$router.push({path:'/?'+d})
        },
        doSearch:function(){
          var text = this.search.trim();
          if(text){
            this.changePage(text)
//            this.search = '';
          }
        }
      },
      watch:{
        '$route' (to, from) {
          this.search=to.query.key;
        }
      }

    }
</script>
<style>
  .search{cursor: pointer}
</style>
