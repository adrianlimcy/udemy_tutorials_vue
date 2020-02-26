<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{email}}</p>
    <img :src='dogImg' width='500' />
  </div>
</template>

<script>
  import axios from 'axios'
  import doggyAxios from '../../axios-dog'
  export default {
    data(){
      return{
        // email: '',
        dogImg: ''
      }
    },
    computed: {
      email() {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      }
    },
    created() {
      this.$store.dispatch('fetchUser')
      doggyAxios.get('')
      .then(res=>{
        console.log(res);
        this.dogImg=res.data.message
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }

</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
