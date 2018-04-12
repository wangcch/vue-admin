import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isMobi: false,
  isShrink: false,
  routerActive: 'dashboard',
  isLogin: false,
  isDashboardSmaller: false
}

const mutations = {
  beMobi (state) {
    state.isMobi = true
  },

  bePC (state) {
    state.isMobi = false
  },

  shrink (state) {
    state.isShrink = true
  },

  noShrink (state) {
    state.isShrink = false
  },

  selectRouter (state, data) {
    state.routerActive = data
  },

  changeLogin (state, data) {
    state.isLogin = data
  },

  dashboardBigger (state) {
    state.isDashboardSmaller = false
  },

  dashboardSmaller (state) {
    state.isDashboardSmaller = true
  }
}

const actions = {
  setBeMobi: ({ commit }) => commit('beMobi'),
  setBePC: ({ commit }) => commit('bePC'),
  setShrinkOn: ({ commit }) => commit('shrink'),
  setShrinkOff: ({ commit }) => commit('noShrink'),
  toggleShrink ({ commit, state }) {
    if (state.isShrink) {
      commit('noShrink')
    } else {
      commit('shrink')
    }
  },
  setRouterActive ({ commit }, data) {
    commit('selectRouter', data)
  },
  setLogin ({ commit }, data) {
    commit('changeLogin', data)
  },
  changeDashboardSize ({ commit }, offsetWidth) {
    if (offsetWidth < 350) {
      commit('dashboardSmaller')
    } else {
      commit('dashboardBigger')
    }
  }
}

const getters = {
  getIsMobi: state => state.isMobi,
  getIsShrink: state => state.isShrink,
  getRouterActive: state => state.routerActive,
  getIsLogin: state => state.isLogin,
  getIsDashboardSmaller: state => state.isDashboardSmaller
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
