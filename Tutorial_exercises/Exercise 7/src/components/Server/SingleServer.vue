<template>
  <div class="">
    Server #{{ server.id }}
    <br>
    Status: {{server.status}}
    <br>
    <button @click="showDetails(server)" type="button" name="button">Details</button>
  </div>
</template>

<script>
  import {eventBus} from '../../main'
  export default {
    props: ['server'],
    methods: {
      showDetails(server) {
        console.log(server);
        eventBus.showTheDetails(server)
      }
    }
  }
</script>

<style>

</style>
