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

	let mobileCode = phone => fetch('POST', '/v1/vcode', {
		mobile: phone
	})

	let mobileCodeVerify = (phone, vcode) => fetch('POST', '/v1/vcode/verify',{
		mobile: phone,
		vcode
	})

	let mobileLogin = () => {
		return {
			code: 0,
			message: '',
		}
	}

	var payRequest = (merchantOrderNo, userId) => fetch('GET', '/payapi/payment/queryOrder', {
		merchantId: 5,
		merchantOrderNo,
		source: 'MOBILE_WAP',
		userId,
		version: '1.0.0',
	});

export{getUser, mobileCode, mobileCodeVerify, mobileLogin, payRequest}