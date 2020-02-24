<template lang="html">
  <div class="">
    <router-view v-for="stock in stocks" :stock="stock"></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      stocks(){
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
