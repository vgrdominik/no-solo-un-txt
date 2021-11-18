export const state = () => ({
  account: null,
})

export const getters = {
  getAccount: (state) => {
    return state.account
  }
}

export const actions = {
  setAccount(state, account) {
    state.commit('updateAccount', account)
  },
}

export const mutations = {
  updateAccount (state, account) {
    state.account = account
  },
  removeAccount (state) {
    state.account = null
  },
}
