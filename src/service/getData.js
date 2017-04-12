import fetch from '../config/fetch'

	/**
	 * 获取用户信息
	 */

	let getUser = () => {
		return {
			name: "kdb",
			age: '23',
			sex: "men"
		}
	}

	// let mobileCode = phone => fetch('POST', '/v4/mobile/verify_code/send', {
	// 	mobile: phone,
	// 	scene: 'login',
	// 	type: 'sms'
	// });

	let mobileCode = () => {
		return {
			code: 0,
			message: '',
			validate_token: 123456
		}
	}

	let mobileRegion = () => {
		return {
			code: 502,
			message: '验证码有误',
		}
	}

export{getUser, mobileCode, mobileRegion}