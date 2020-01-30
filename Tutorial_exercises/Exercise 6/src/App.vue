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
import CustomHeader from './CustomHeader.vue'
import CustomFooter from './CustomFooter.vue'
import ServerList from './ServerFarm.vue'

export default {
  components: {
    customHeader: CustomHeader,
    customFooter: CustomFooter,
    'server-list': ServerList
  }

}
</script>

<style>

</style>
