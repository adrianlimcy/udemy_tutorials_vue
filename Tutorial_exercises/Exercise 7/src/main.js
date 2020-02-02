import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showTheDetails(data) {
      this.$emit('showTheDetails', data)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
