<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item">
              <appServer v-for="server in servers" :server="server" />
            </li>
        </ul>
    </div>
</template>

<script>
  import {eventBus} from '../../main'
  import appServer from './SingleServer.vue'
  export default {
    data() {
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Abnormal'},
          { id: 3, status: 'Critical'},
          { id: 4, status: 'Unknown'},
          { id: 5, status: 'Normal'}
        ]
      }
    },
    components: {
      appServer: appServer
    }
  }
</script>

<style>

</style>
