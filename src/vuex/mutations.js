import {
	GET_USERINFO,
	SET_TITLE,
	SET_PRICE_NUM,
} from './mutation-types.js'

export default {
	[GET_USERINFO](state, info){
		console.log(info);
	},
	[SET_TITLE](state, title){
		document.title = title;
	},
	[SET_PRICE_NUM](state, num){
		if (isNaN(num)) {
			console.error('传的什么东西……我要数值');
			state.price = num;
		}
		let price = num + '',
		integer = price.split('.')[0],
		decimal = price.split('.')[1],
		temp_price = '',
		count = 0;
		if (integer.length>3) {
			for (var i = integer.length - 1; i >= 0; i--) {
				if (count&&!(count%3)) {
					temp_price = integer[i] + ',' + temp_price;
				}else{
					temp_price = integer[i] + temp_price;
				}
				count++;
			}
			state.price = temp_price + (decimal?('.' + decimal):'');
		}else{
			state.price = price;
		}
	}
}
