<template>
  <div class="container">
    <form>
      <div class="row" v-if="!isSubmited">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <!-- <div class="form-group">
            <label for="fName">First Name</label>
            <input type="text" name="fName" class="form-control" v-model="userData.fName">
          </div> -->
          <appFirstName v-model="userData.fName"/>
          <!-- <div class="form-group">
            <label for="lname">Last Name</label>
            <input type="text" name="lname" class="form-control" v-model="userData.lName">
          </div> -->
          <appLastName v-model="userData.lName" />
          <div class="form-group">
            <label for="mail">Mail</label>
            <input type="text" name="mail" class="form-control" v-model="userData.mail">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" v-model="userData.password">
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
              <p>Store Data?</p>
              <label for="storeData"><input type="radio" name="" value=true v-model="userData.storeData"> Yes</label>
              <label for="storeData"><input type="radio" name="" value=false v-model="userData.storeData"> No</label>
            </div>
          </div>

          <button @click.prevent="submitted" type="button" name="button" class="btn btn-primary">Submit</button>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{userData.fName}} {{userData.lName}}</p>
            <p>Mail: {{userData.mail}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store in Database?: {{userData.storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FirstName from './FirstName.vue'
  import LastName from './LastName.vue'
  export default {
    data() {
      return {
        userData: {
          fName: "",
          lName: "",
          mail: "",
          password: "",
          storeData: false
        },
        isSubmited: false
      }
    },
    methods: {
      submitted() {
        this.isSubmited = true
      }
    },
    components: {
      appFirstName: FirstName,
      appLastName: LastName
    }
  }
</script>

<style>
</style>
