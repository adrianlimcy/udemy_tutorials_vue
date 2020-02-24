<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav mr-auto">
          <router-link to="/Portfolio" tag="li" active-class="active" exact><a>Portfolio</a></router-link>
          <router-link to="/Stocks" tag="li" active-class="active" exact><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown" :class="{open: isDropdownOpen}"
          @click="isDropdownOpen=!isDropdownOpen">
            <a href="#" class="dropdown toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a @click="onSubmit">Save</a></li>
              <li><a @click="onLoad">Load</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from '../axios-auth'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
        isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'loadData'
    ]),
    endDay() {
      this.randomizeStocks()
    },
    onSubmit() {
      const formData={
        funds: this.$store.getters.funds,
        portfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      console.log(formData);
      axios.put('/stockportfolio.json', formData).then(response=>{
        console.log(response);
      }).catch(error=>{
        console.log(error);
      })
    },
    onLoad() {
      // axios.get('/stockportfolio.json').then(response=>{
      //   console.log(response);
      //
      // }).catch(error=>{
      //   console.log(error);
      // })
      this.loadData()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
