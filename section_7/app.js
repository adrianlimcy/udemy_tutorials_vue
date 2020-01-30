// var data ={
//   status: 'Critical'
// }

// Vue.component('my-cmp', {})
// this will make my-cmp a global component

var cmp = {
  data() {
    // return data;
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{status}} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus() {
      this.status = 'Normal'
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'my-cmp': cmp
  }
})
new Vue({
  el: '#app2',
  components: {
    'my-cmp': cmp
  }
})
