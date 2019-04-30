import Vue from 'vue'
import Vuex from 'vuex'

import ChatListService from '@/services/ChatListService'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    initChatList: false,
    chatList: [],
    alerts: {success: {s: false, text: 'sus'}, error: {s: false, text: 'error'}},
    dialogAuth: {url: '', s: false}
  },
  mutations: {
    setChatList (state, chatList) {
      state.chatList = chatList
    },
    addChatList (state, newChat) {
      state.chatList.push(newChat)
    },
    setInitChatList (state, t) {
      state.initChatList = t
    },
    setAlerts (state, alert) {
      state.alerts.success.s = false
      state.alerts.error.s = false
      if (alert.type === 0) {
        state.alerts.success.s = true
        state.alerts.success.text = alert.text
      }
      if (alert.type === 1) {
        state.alerts.error.s = true
        state.alerts.error.text = alert.text
      }
    },
    setDialog (state, dialog) {
      state.dialogAuth = dialog
    }
  },
  actions: {
    async updateListChat ({state, commit}) {
      try {
        var res = (await ChatListService.getAll()).data
        console.log(res)
        commit('setChatList', res)
      } catch (error) {}
      commit('setInitChatList', true)
    },

    async addChat ({commit}, data) {
      try {
        var res = (await ChatListService.addChat({chat_url: data.chat_url})).data
        if (res.status === 0) {
          commit('setAlerts', {type: 0, text: 'Успешно добавлен новый чат: ' + res.chat.url + ' (' + res.chat.online + ')'})
        } else if (res.status === 1) {
          commit('setAlerts', {type: 1, text: 'Это не чат august или не верна ссылка'})
        } else if (res.status === 2) {
          commit('setAlerts', {type: 1, text: 'Данный чат уже есть в списке'})
        }
        commit('addChatList', res.chat)
      } catch (error) {}
    },

    showAlert ({commit}, alert) {
      commit('setAlerts', alert)
    },

    showDialog ({commit}, dialog) {
      commit('setDialog', dialog)
    }
  }
})
