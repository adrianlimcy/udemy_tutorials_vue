<template lang="html">
  <div>
    <router-view v-for="stock in stocks" :stock="stock"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
  }
</script>

<style lang="css" scoped>
</style>
