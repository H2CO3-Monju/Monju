// 厳格モードの無効化
export const strict = false

export const state = () => ({
  user: null
})

// sotreの状態を算出する
// 依存関係の一部が変更されたときにのみ再評価される
export const getters = {
  isAuthenticated(state) {
    return !!state.user
  }
}

// storeの状態を変更する
// payloadはオブジェクトにしてpayload.userというようにした方が内容が分かりやすくなる
// 同期的でなければならない
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

// store内のstateやgettersにアクセスできる
// 非同期の操作が可能
export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  }
}
