// 厳格モードの無効化
export const strict = false

export const state = () => ({
  event: null
})

// sotreの状態を算出する
// 依存関係の一部が変更されたときにのみ再評価される
export const getters = {
  getEvent(state) {
    return state.event
  }
}

// storeの状態を変更する
// payloadはオブジェクトにしてpayload.userというようにした方が内容が分かりやすくなる
// 同期的でなければならない
export const mutations = {
  setEvent(state, payload) {
    state.event = payload
  }
}

// store内のstateやgettersにアクセスできる
// 非同期の操作が可能
export const actions = {
  setEvent({ commit }, payload) {
    commit('setEvent', payload)
  }
}
