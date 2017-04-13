<template>
	<div id='loginContainer'>
		<div class="mainBody">
			<div class="loginForm">
				<div class="logo">
					<img src="../images/logo.png" alt="logo">					
				</div>
				<p class="tipTxt">请输入以下信息，提交确认会员身份：</p>
				<div class="phone">
					<div class="inputBox clear">
						<i class="icon left">
							<img src="../images/phone.png">
						</i>
						<input type="text" class="phoneInput left" maxlength="11" placeholder="请输入手机号码" v-model='phone_number'>
					</div>
				</div>
				<div class="code clear">
					<div class="inputBox left">
						<i class="icon left">
							<img src="../images/code.png">
						</i>
						<input type="text" class="codeInput left" placeholder="请输入验证码" maxlength="6" v-model='code'>
					</div>					
					<button class='right' :class="{'btn-primary': rightPhoneNumber, 'btn-default': !rightPhoneNumber}" v-show='!computedTime' @click='getVerifyCode'>获取验证码</button>
					<button class="right btn-default" v-show='computedTime'>已发送({{computedTime}}s)</button>
				</div>
				<div class="sexSelect">
					您的性别
					<button class="btn-sm sex-item" :class="{'btn-primary': sex=='famale','btn-default': sex!='famale'}" @click='setSex("famale")'>女</button>
					<button class="btn-sm sex-item" :class="{'btn-primary': sex=='male','btn-default': sex!='male'}" @click='setSex("male")'>男</button>
				</div>
				<div class="bottomBox">
					<p class='agree' @click='agree=!agree'><i class='check' :class='{checked: agree}'></i>我要注册会员并同意"XXXX关于隐私的声明"</p>
					<button class="btn-primary btn-block" @click='mobileRegion'>确定</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	import {mobileCode, mobileRegion} from '../service/getData'
	export default{
		data () {
			return {
                timer: '', //倒计时定时器

				sex: 'famale',
				agree: true,
				phone_number: '', //电话号码
				code: '', //短信验证码
				validate_token: '', //获取短信时返回的验证值，登录时需要
				userInfo: '', //用户信息

				computedTime: 0,
			}
		},
		mounted () {
			this.SET_TITLE('会员绑定');
		},
		computed: {
            //判断手机号码
            rightPhoneNumber(){
                return /^1\d{10}$/gi.test(this.phone_number)
            }
        },
		methods:{
			...mapMutations(['SET_TITLE']),
			setSex (sex){
				this.sex = sex;
			},
			//获取短信验证码
            async getVerifyCode(){
                if (this.rightPhoneNumber) {
                    this.computedTime = 60;
                    this.timer = setInterval(() => {
                        this.computedTime --;
                        if (this.computedTime == 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000)
                    //发送短信验证码
                    let res = await mobileCode(this.phone_number);
                    if (res.message) {
                    	$.alert(res.message);
                        return
                    }
                    this.validate_token = res.validate_token;
                    $(".codeInput").focus();
                }
            },
            async mobileRegion () {
        		if (!this.rightPhoneNumber) {
        			$.alert('手机号码不正确');
                    return
                }
                if(!(/^\d{6}$/gi.test(this.code))){
                	$.alert('短信验证码不正确');
                    return
                }
                if (!this.agree) {
                	$.alert('您还没有同意隐私声明');
                    return
                }
                //注册会员
                let res = await mobileRegion(this.phone_number, this.code, this.sex);
                if (res.message) {
                	$.alert(res.message);
                    return
                }
                this.userInfo = res;
                let _self = this;
                $.alert('注册成功',()=>{
                	_self.$router.push({name: 'userCenter'});
                });

            }
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';

	#loginContainer{
		@include wh(100%, 100%);
		@include bis('../images/bj.png');
		position: relative;
	}
	.mainBody{
		@include wh(80%, 70%);
		@include center;
		background-color: rgba(255,255,255,0.9);
	}
	.loginForm{
		@include wh(80%, 87%);
		@include center;
		position: relative;

		.logo{
			@include wh(100%, 2.688rem);
			text-align: center;

			img{
				height: 100%;
			}
		}
		.tipTxt{
			margin: 1.152rem 0 0.84rem 0;
			@include sc(0.5rem, $c4);
		}
		.inputBox{
			@include wh(100%, 1.5rem);
			border: 1px solid $c6;
			@include borderRadius(4px);

			.icon{
				position: relative;
				@include wh(1.7rem, 100%);

				img{
					@include wh(0.64rem, 0.64rem);
					@include center;
				}
			}
			.codeInput{
				@include wh(70%, 100%);
			}
			.phoneInput{
				@include wh(80%, 100%);
			}
		}
		.code{
			margin: 0.84rem 0;
		}
		.code .inputBox{
			width: 63%;
		}
		.sexSelect{
			@include wh(100%, 1.1rem);
			@include font(0.64rem, 1.1rem);

			.sex-item{
				margin-left: 0.4267rem;
			}
		}
		.bottomBox{
			position: absolute;
			bottom: 0;
			width: 100%;

			.agree{
				font-size: 0.4693rem;
				margin-bottom: 0.768rem;

				.check{
					display: inline-block;
					margin-right: 0.2133rem;
					@include wh(0.64rem, 0.64rem);
					@include bis('../images/check.png')
				}
				.checked{
					@include bis('../images/checked.png')
				}
			}
		}
	}
</style>