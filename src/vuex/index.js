import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './action'

Vue.use(Vuex)

const state = {
	userInfo: null
}

export default new Vuex.Store({
	state,
	actions,
	getters,
})