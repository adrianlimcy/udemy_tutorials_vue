<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>{{status}}</p>
    </div>

</template>

<script>
  import {eventBus} from '../../main'
  export default {
    props: ['status'],
    created(){
      eventBus.$on('showTheDetails', (data)=>{
        this.status = data
      })
    }
  }
</script>

<style>

</style>
