import Home from './components/Home.vue'
import Header from './components/Header.vue'

const Portfolio = resolve=>{
  require.ensure(
    ['./components/portfolio/Portfolio.vue'], ()=>{
      resolve(require('./components/portfolio/Portfolio.vue'))
    }
  )
}
const Pstock = resolve=>{
  require.ensure(
    ['./components/portfolio/Stock.vue'], ()=>{
      resolve(require('./components/portfolio/Stock.vue'))
    }
  )
}
const Stocks = resolve=>{
  require.ensure(
    ['./components/stock/Stocks.vue'], ()=>{
      resolve(require('./components/stock/Stocks.vue'))
    }
  )
}
const Sstock = resolve=>{
  require.ensure(
    ['./components/stock/Stock.vue'], ()=>{
      resolve(require('./components/stock/Stock.vue'))
    }
  )
}

export const routes = [
  {
    path: '', name: 'home', components: {
    default: Home,
    'app-header': Header
    }
  },
  {
    path: '/portfolio', components: {
      default: Portfolio,
      'app-header': Header
    },
    children: [
      { path: '', component: Pstock}
    ]
  },
  {
    path: '/stocks', components: {
      default: Stocks,
      'app-header': Header
    },
    children: [
      { path: '', component: Sstock }
    ]
  }
]
