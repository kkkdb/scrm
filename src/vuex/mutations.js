import {
	GET_USERINFO
} from './mutation-types.js'

const mutations = {
	GET_USERINFO: (state, info) => {
		console.log(info);
	}
}

export default{
	mutations
}