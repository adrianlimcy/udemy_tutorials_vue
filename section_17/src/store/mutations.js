import * as types from './types'

// export const updateValue = (state, payload)=>{
//   state.value = payload
// }
export default {
  [types.MUTATE_UPDATE_VALUE]: (state, payload)=>{
    state.value = payload
  }
}
