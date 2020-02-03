<template lang="html">
  <div>
    <h3>New Quote</h3>
    <button @click="counter++" type="button" name="button">Increase!</button>
    <p>{{counter}}</p>
  </div>

</template>

<script>
export default {
  data(){
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('destroyed');
  },
  deactivated() {
    console.log('deactived');
  },
  activated(){
    console.log('activated');
  }
}
</script>
