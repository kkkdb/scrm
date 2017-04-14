import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	userInfo: null,
	points: null,
	vipLevel: {
		1: '会员',
		2: '白银会员',
		3: '黄金会员',
		4: '铂金会员'
	},
	shippingStatus: {
		init: '已提交，待确认',
		wait_ship: '已确认，代发货',
		shipping :'已发货，待收货',
		finished :'已收货'
	},
	shoppeStatus: {
		init: '待领用',
		finished: '已领用'
	},
	date: null,
	laseDate: null
}

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
})