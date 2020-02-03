<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="color='appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="color='appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="color='appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="color">
                  <span slot="blue">blue</span><span slot='green'>green</span><span slot='red'>red</span>
                </component>
                <!-- <p>{{color}}</p> -->
                <!-- <app-blue>This is Blue</app-blue>
                <app-green>This is Green</app-green>
                <app-red>This is Red</app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data() {
        return {
          color: 'appBlue'
        }
      },
      components: {
          appBlue: Blue,
          appGreen: Green,
          appRed: Red
      }
    }
</script>

<style>
</style>
