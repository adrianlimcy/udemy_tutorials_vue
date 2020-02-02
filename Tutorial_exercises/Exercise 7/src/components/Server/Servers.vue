<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item"
                v-for="server in servers">
                Server #{{ server.id }}
                <br>
                Status: {{server.status}}
                <br>
                <button @click="showDetails(server.status)" type="button" name="button">Details</button>
            </li>
        </ul>
    </div>
</template>

<script>
  import {eventBus} from '../../main'
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
    methods: {
      showDetails(status) {
        console.log(status);
        eventBus.showTheDetails(status)
      }
    }
  }
</script>

<style>

</style>
