import * as types from './types'

export default {
  [types.UPDATE_VALUE]: ({commit}, payload)=> {
    commit('updateValue', payload)
  }
}

// export const updateValue = ({commit}, payload)=> {
//   commit('updateValue', payload)
// }
