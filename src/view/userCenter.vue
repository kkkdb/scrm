<template>
	<div id="userCenter">
		<div class="mainBody">
			<div class="headBox">
				<div class="logo">
					<img src="../images/logo.png" alt="logo">
				</div>
				<div class="userInfo">
					<ul>
						<li>
							<p class="p1">积分</p>
							<p class="p2" v-text='points'></p>
						</li>
						<li>
							<p class="p1">会员等级</p>
							<p class="p2">银卡会员</p>
						</li>
						<li>
							<p class="p1">会员No.</p>
							<p class="p2">1000000001</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="bototmBox">
				<ul>
					<router-link :to="{name: 'vipRule'}" tag='li'>
						<img src="../images/vip.png" alt="会员制度">
						<p>会员制度</p>
					</router-link>
					<router-link :to="{name: 'gift'}" tag='li'>
						<img src="../images/gift.png" alt="积分兑礼">
						<p>积分兑礼</p>
					</router-link>
					<router-link :to="{name: 'rights'}" tag='li'>
						<img src="../images/rights.png" alt="我的权益">
						<p>我的权益</p>
					</router-link>
					<router-link :to="{name: 'trial'}" tag='li'>
						<img src="../images/trial.png" alt="试用申请">
						<p>试用申请</p>
					</router-link>
					<router-link :to="{name: 'userInfo'}" tag='li'>
						<img src="../images/user.png" alt="完善资料">
						<p>完善资料</p>
					</router-link>
					<li>
						<img src="../images/calendar.png" alt="每日签到">
						<p>每日签到</p>
					</li>
					<li>
						<img src="../images/kefu.png" alt="专属客服">
						<p>专属客服</p>
					</li>
					<router-link :to="{name: 'earnRecord'}" tag='li'>
						<img src="../images/earnRecord.png" alt="积分记录">
						<p>积分记录</p>
					</router-link>
					<router-link :to="{name: 'usageRecord'}" tag='li'>
						<img src="../images/usageRecord.png" alt="兑礼及试用记录">
						<p>兑礼及试用记录</p>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {setNum} from '../common/common'
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('会员中心');
			this.points = setNum(2000);
		},
		data() {
			return{
				points: ''
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),

		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	
	#userCenter{
		@include wh(100%, 100%);
		@include bis('../images/bj.png');
	}
	.mainBody{
		@include wh(100%, 100%);
		background-color: rgba(255,255,255,0.9);
	}
	.headBox{
		@include wh(100%, 30%);
		border-bottom: 1px solid $c6;

		.logo{
			@include wh(100%, 65%);
			text-align: center;
			padding-top: 1.664rem;

			img{
				height: 2.725rem;
			}
		}
		.userInfo{
			@include wh(100%, 35%);
			ul li{
				float: left;
				@include wh(33.3%, 100%);
				text-align: center;

				.p1{
					@include sc(0.512rem, $c4);
				}
				.p2{
					@include sc(0.64rem, $c3);
				}
			}
		}
	}
	.bototmBox{
		@include wh(100%, 70%);
		ul li{
			float: left;
			@include wh(33.3333%, 4.565rem);
			text-align: center;
			border-bottom: 1px solid $c6;
			border-left: 1px solid $c6;

			img{
				margin-top: 0.97rem;
				margin-bottom: 0.2rem;
				@include wh(1.28rem, 1.28rem);
			}
			p{
				@include sc(0.5547rem, $c3)
			}
		}
		ul li:nth-of-type(1),ul li:nth-of-type(4),ul li:nth-of-type(7){
            border-left: none;
        }
	}

</style>