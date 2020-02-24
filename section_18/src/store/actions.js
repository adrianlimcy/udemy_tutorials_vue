import Vue from 'vue'
import axios from 'axios'

export const loadData = ({commit})=>{
  axios.get('/stockportfolio.json')
  .then(response=>{
    const data = response.data
    if (data) {
      const stocks = data.stocks
      const funds = data.funds
      const stockPortfolio = data.portfolio

      const portfolio = {
        stockPortfolio,
        funds
      }

      commit('SET_STOCKS', stocks)
      commit('SET_PORTFOLIO', portfolio)
    }
  })
}
