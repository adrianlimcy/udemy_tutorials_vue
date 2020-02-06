<template lang="html">
  <div class="row">
    <form class="" action="index.html" method="post">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button type="button" class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
        <!-- .prevent is to prevent the button from submitting the form -->
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: ""
      }
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote)
        this.quote=''
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
