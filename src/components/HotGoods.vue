<template>
  <div id="hotGoods">
    <div class="panel">
      <div class="rank">
        <div class="hd">
          <h3>TOP RANKING</h3>
        </div>
        <div class="inner">
          <div v-for="p in hotGoods" class="product-item">
            <router-link :to="`/detail/${p.id}`" target="_blank">
              <div class="pic">
                <div class="subpic"><img :src="p.smallImageUrl"></div>
              </div>
              <p class="title">{{p.title}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'hotGoods',
    props:{
      hotGoods:{
        default:[]
      }
    }
  }
</script>

<style>

</style>

