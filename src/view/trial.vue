<template>
	<div id="trial">
		<div class="mainBody">
			<ul>
				<li class='orange'>
					<div class="leftBox">
						<p class="name">蜜“遇”之旅限量套装</p>
						<p class="useType">【付邮试用】</p>
						<p class='simpleP'>活动时间：4.1-4.9</p>
						<p class='simpleP'>活动数量：250</p>
						<p class='simpleP'>剩余数量：200</p>
						<router-link :to="{name: 'formConfirm', params: {type: 'trial'}}" tag='button' class="btn-primary">申请试用</router-link>
					</div>
					<div class="rightBox">
						<div class="imgCont">
							<img src="../images/5.jpg">
						</div>
					</div>
				</li>
				<li class='blue'>
					<div class="leftBox">
						<p class="name">幻彩流星系列</p>
						<p class="useType">【免费试用】</p>
						<p class='simpleP'>活动时间：4.1-4.9</p>
						<p class='simpleP'>活动数量：180</p>
						<p class='simpleP'>剩余数量：30</p>
						<router-link :to="{name: 'formConfirm', params: {type: 'trial'}}" tag='button' class="btn-primary">申请试用</router-link>
					</div>
					<div class="rightBox">
						<div class="imgCont">
							<img src="../images/6.jpg">
						</div>
					</div>
				</li>
				<li class='purple'>
					<div class="leftBox">
						<p class="name">一千零一夜</p>
						<p class="useType">【5,000积分试用】</p>
						<p class='simpleP'>活动时间：4.1-4.9</p>
						<p class='simpleP'>活动数量：80</p>
						<p class='simpleP'>剩余数量：67</p>
						<router-link :to="{name: 'formConfirm', params: {type: 'trial'}}" tag='button' class="btn-primary">申请试用</router-link>
					</div>
					<div class="rightBox">
						<div class="imgCont">
							<img src="../images/7.jpg">
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('试用申请');
		},
		data() {
			return{

			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),

		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	
	#trial{
		width: 100%;
		min-height: 100%;
		background-color: $c8;
	}
	.mainBody{
		@include wh(100%, 100%);
		padding: 0.64rem 5%;

		ul li{
			height: 7.8933rem;
			@include borderRadius(0.1707rem);
			padding: 0.8rem 3%;
			margin-bottom: 0.4266rem;
			display: flex;
			&.orange{
				background-color: #FAF4E4;
				.name,.useType{
					color: #B68536;
				}
				button{
					background-color: #BD8D4F;
				}
			}
			&.blue{
				background-color: #D9F0FC;
				.name,.useType{
					color: #4796C5;
				}
				button{
					background-color: #4796C5;
				}
			}
			&.purple{
				background-color: #E8E8F3;
				.name,.useType{
					color: #1D2088;
				}
				button{
					background-color: #1D2088;
				}
			}

			.leftBox{
				flex: 1;
				text-align: center;
				
				.name{
					font-size: 0.64rem;
					font-weight: bold;
					font-family: 'SimHei';
				}
				.useType{
					font-size: 0.512rem;
					margin-top: 0.1rem;
					margin-bottom: 0.2rem;
				}
				.simpleP{
					@include sc(0.5546rem, #333);
				}
				button{
					margin-top: 0.2rem;
					height: 1.2rem;
				}
			}
			.rightBox{
				flex: 1;
				.imgCont{
					@include wh(100%, 100%);
					padding: 0.2rem;

					img{
						@include wh(100%, 100%);
						object-fit: cover;
					}
				}
			}
		}
	}
</style>