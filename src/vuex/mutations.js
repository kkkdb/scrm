import {
	GET_USERINFO,
	SET_TITLE,
	SET_TIME,
} from './mutation-types.js'

export default {
	[GET_USERINFO](state, info){
		console.log(info);
	},
	[SET_TITLE](state, title){
		document.title = title;
	},
	[SET_TIME](state,{type, date}){
		state[type] = date;
	},
}
