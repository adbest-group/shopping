<template>
  <div>
    <crumbs Particulars="Contact Us"></crumbs>
    <div class="product detail">
      <div class="appendix">
        <h1>Contact Us</h1>
        <div class="items"><span>Name:</span><input v-model="name"></div>
        <div class="items"><span>Contact Email:</span><input v-model="email"></div>
        <div class="items"><span>Phone:</span><input v-model="phone"></div>
        <div class="items"><span>Problems/Comments:</span><textarea v-model="content"></textarea></div>
        <div class="items">
          <div class="submit" @click="submit">Submit</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Crumbs from '../components/Crumbs.vue'
  import { mapActions, mapState } from 'vuex'
  export default{
    name:'contactUs',
    components:{
      Crumbs,
    },
    methods:{
      submit(){
        if(!this.email){
          this.$toast.center('The email address cannot be empty');
          return
        }
        if(!this.content){
          this.$toast.center('The content or feedback cannot be empty');
          return
        }
        this.$store.dispatch("getContactUs");
       //todo ajax
      }
    },
    data(){
      return {
        name: "",
        email: "",
        phone: "",
        content:'',
      }
    },
    computed: {
    ...mapState(['contactUsFlag']),
     },
    watch: {
      contactUsFlag(newValue, oldValue) {
        if(newValue&&!oldValue){
          this.$toast.center('success');
        }
      }
    }
  }
</script>
