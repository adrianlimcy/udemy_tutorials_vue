<template>
    <div class="container">
      <customHeader/>
      <hr>
      <server-list/>
      <hr>
    <customFooter/>
  </div>
</template>

<script>
import CustomHeader from './components/shared/CustomHeader.vue'
import CustomFooter from './components/shared/CustomFooter.vue'
import ServerList from './components/server/ServerFarm.vue'

export default {
  components: {
    customHeader: CustomHeader,
    CustomFooter, //ES6 style of writing
    'server-list': ServerList
  }

}
</script>

<style>

</style>
