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
        email: '',
        dogImg: ''
      }
    },
    created() {
      axios.get('/users.json')
      .then(response=>{
        console.log(response);
        const data = response.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users);
        this.email = users[0].email
      })
      .catch(error=>{
        console.log(error);
      })

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
