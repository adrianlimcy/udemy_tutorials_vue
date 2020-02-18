const state = {
  getSetValue: 0
}

const mutations = {
  getSetValue: (state, payload)=>{
    state.getSetValue = payload
  }
}
const actions = {
  getSetValue({commit}, payload) {
    commit('getSetValue', payload)
  }
}
const getters ={
  getSetValue: state=>{
    return state.getSetValue
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
