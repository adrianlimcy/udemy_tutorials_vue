<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Directive Exercise</h1>
              <!-- <button v-appListen="alertMe" class="btn btn-primary">Button without modifier</button> -->
              <button v-appListen:click="alertMe" class="btn btn-warning">Button with modifier</button>
              <!-- Exercise -->
              <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
            </div>
        </div>
        <hr>
        <div class="" style="width:100px; height:100px; background-color: lightgreen" v-appListen:mouseenter="mouseEnter" v-appListen:mouseleave="mouseLeft">

        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      alertMe() {
        console.log('triggered');
      },
      mouseEnter() {
        console.log('mouse entered');
      },
      mouseLeft() {
        console.log('mouse left');
      }
    },
    directives: {
      appListen: {
        bind(el, binding, vnode){
          // el.onclick = function() {
          //   binding.value()

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
