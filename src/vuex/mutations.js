import {
	GET_USERINFO,
	SET_TITLE,
} from './mutation-types.js'

export default {
	[GET_USERINFO](state, info){
		console.log(info);
	},
	[SET_TITLE](state, title){
		document.title = title;
	}
}
