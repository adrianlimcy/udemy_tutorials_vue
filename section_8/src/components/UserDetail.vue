<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName" type="button" name="button">Reset Name</button>
        <button @click="resetFn" type="button" name="button">Reset Name, the better way without console errors</button>
    </div>
</template>

<script>
  import {eventBus} from '../main'
  export default {
    props: {
      name: {
        type: String,
        // default: 'Maxed',
        required: true
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("")
      },
      resetName() {
        this.name= 'Max'
        this.$emit('nameWasReset', this.name)
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age)=>{
        this.userAge = age
      })
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
