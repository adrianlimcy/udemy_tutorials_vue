<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-appListen:click="alertMe">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      alertMe() {
        console.log('triggered');
      }
    },
    directives: {
      appListen: {
        bind(el, binding, vnode){
          el.addEventListener(binding.arg, binding.value)
          // binding.arg = click
          // binding.value = alertMe
        }

      }
    }
  }
</script>

<style>
</style>
