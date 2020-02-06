<template lang="html">
  <div class="row">
    <appQuote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</appQuote>
    <!-- .native allows us to click on the inside component as if we clicked on it itself -->
  </div>
</template>

<script>
  import Quote from './Quote.vue'
  export default {
    props: ['quotes'],
    components: {
      appQuote: Quote
    },
    methods:{
      deleteQuote(index) {
        this.$emit('quoteDeleted', index)
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
