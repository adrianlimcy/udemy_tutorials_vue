<template lang="html">
  <div class="form-group">
    <label for="fName">First Name</label>
    <input type="text" name="fName" class="form-control" @input="changeContent">
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    changeContent(event) {
      var content = event.target.value
      this.$emit('input', content)
    }
  }
}
</script>
