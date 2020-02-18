import * as types from '../types'

const state = {
  counter: 0,
}

const getters = {
  // doubleCounter: state=> {
  //   return state.counter * 2
  // },
  // stringCounter: state=>{
  //   return state.counter + ' clicks'
  // },
  [types.DOUBLE_COUNTER]: state=> {
    return state.counter * 2
  },
  [types.CLICK_COUNTER]: state=>{
    return state.counter + ' clicks'
  },
}

const mutations = {
  // increment: (state, payload)=>{
  //   state.counter+=payload
  // },
  // decrement: (state, payload)=>{
  //   state.counter-=payload
  // },
  [types.MUTATE_INCREMENT_COUNTER]: (state, payload)=>{
    state.counter+=payload
  },
  [types.MUTATE_DECREMENT_COUNTER]: (state, payload)=>{
    state.counter-=payload
  },
}

const actions = {
  // increment: context=> {
  //   context.commit('increment')
  // }
  // increment: ({commit}, payload)=>{
  //   commit('increment', payload)
  // },
  // decrement: ({commit}, payload)=>{
  //   commit('decrement', payload)
  // },
  // asyncIncrement: ({commit}, payload)=>{
  //   setTimeout(()=>{
  //     commit('increment', payload.by)
  //   }, payload.duration)
  // },
  // asyncDecrement: ({commit}, payload)=>{
  //   setTimeout(()=>{
  //     commit('decrement', payload.by)
  //   }, payload.duration)
  [types.COUNTER_INCREMENT]: ({commit}, payload)=>{
    commit(types.MUTATE_INCREMENT_COUNTER, payload)
  },
  [types.COUNTER_DECREMENT]: ({commit}, payload)=>{
    commit(types.MUTATE_DECREMENT_COUNTER, payload)
  },
  [types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload)=>{
    setTimeout(()=>{
      commit(types.MUTATE_INCREMENT_COUNTER, payload.by)
    }, payload.duration)
  },
  [types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload)=>{
    setTimeout(()=>{
      commit(types.MUTATE_DECREMENT_COUNTER, payload.by)
    }, payload.duration)
  },
}

export default{
  state,
  mutations,
  getters,
  actions
}
