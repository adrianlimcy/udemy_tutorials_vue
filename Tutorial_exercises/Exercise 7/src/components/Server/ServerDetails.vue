<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server">
          <p >Server Details are currently not updated</p>
        </div>
        <div v-else >
          <p>Server #{{server.id}}</p>
          <p>{{server.status}}</p>
          <button @click="changeStatus" type="button" name="button">Change Status</button>
        </div>
    </div>

</template>

<script>
  import {eventBus} from '../../main'
  export default {
    props: ['server'],
    methods: {
      changeStatus() {
        this.server.status = 'Normal'
      }
    },
    created(){
      eventBus.$on('showTheDetails', (server)=>{
        this.server = server
        // console.log(server);
      })
    }
  }
</script>

<style>

</style>
