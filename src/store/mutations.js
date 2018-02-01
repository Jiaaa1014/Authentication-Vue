import * as types from './mutation-types'

export const mutations = {
  [types.SIGN_IN](state, user_payload) {
    state.user = user_payload
    console.log('mutations.js', new Date())
  },

  [types.SIGN_OUT](state) {
    state.user = {}
  }

}
