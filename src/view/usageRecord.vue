<template>
	<div id="usageRecord">
		<div class="navbar">
			<div class="nav-item" :class="{active: type=='gift'}" @click='type="gift"'>兑礼</div>
			<div class="nav-item" :class="{active: type=='trial'}" @click='type="trial"'>试用</div>
		</div>
		<div class="weui-cells timeline">
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__hd">
	                <label class="weui-label">本月</label>
	            </div>
	            <div class="weui-cell__bd"></div>
	            <div class="weui-cell__ft">2017年4月</div>
			</div>
		</div>
		<div class="giftList">
			<ul>
				<li>
					<div class="imgContent left">
						<img src="../images/1.jpg">
					</div>
					<div class="txtContent">
						<p class="txt-top">帝皇蜂姿修复蜜润柔肤水30ml</p>
						<div class="txt-bottom">
							<div class="p1 clear">
								<div class="left text-pink">快递配送</div>
								<div class="right">2,000积分</div>
							</div>
							<div class="p2 clear">
								<div class="left" v-text='shippingStatus["init"]'></div>
								<div class="right">今日 11:44</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="imgContent left">
						<img src="../images/2.jpg">
					</div>
					<div class="txtContent">
						<p class="txt-top">幻彩流星蜜粉饼</p>
						<div class="txt-bottom">
							<div class="p1 clear">
								<div class="left text-pink">快递配送</div>
								<div class="right">4,000积分</div>
							</div>
							<div class="p2 clear">
								<div class="left" v-text='shippingStatus["wait_ship"]'></div>
								<div class="right">2017-04-06</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="imgContent left">
						<img src="../images/3.jpg">
					</div>
					<div class="txtContent">
						<p class="txt-top">幻彩流星亮肤修颜液</p>
						<div class="txt-bottom">
							<div class="p1 clear">
								<div class="left text-pink">专柜领用</div>
								<div class="right">8,000积分</div>
							</div>
							<div class="p2 clear">
								<div class="left" v-text='shoppeStatus["init"]'></div>
								<div class="right">2017-04-06</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="imgContent left">
						<img src="../images/4.jpg">
					</div>
					<div class="txtContent">
						<p class="txt-top">小黑裙淡香水30ml</p>
						<div class="txt-bottom">
							<div class="p1 clear">
								<div class="left text-pink">专柜领用</div>
								<div class="right">10,000积分</div>
							</div>
							<div class="p2 clear">
								<div class="left" v-text='shoppeStatus["finished"]'></div>
								<div class="right">2017-04-06</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="imgContent left">
						<img src="../images/4.jpg">
					</div>
					<div class="txtContent">
						<p class="txt-top">小黑裙淡香水30ml</p>
						<div class="txt-bottom">
							<div class="p1 clear">
								<div class="left text-pink">专柜领用</div>
								<div class="right">10,000积分</div>
							</div>
							<div class="p2 clear">
								<div class="left" v-text='shoppeStatus["finished"]'></div>
								<div class="right">2017-04-06</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="imgContent left">
						<img src="../images/4.jpg">
					</div>
					<div class="txtContent">
						<p class="txt-top">小黑裙淡香水30ml</p>
						<div class="txt-bottom">
							<div class="p1 clear">
								<div class="left text-pink">专柜领用</div>
								<div class="right">10,000积分</div>
							</div>
							<div class="p2 clear">
								<div class="left" v-text='shoppeStatus["finished"]'></div>
								<div class="right">2017-04-06</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="imgContent left">
						<img src="../images/4.jpg">
					</div>
					<div class="txtContent">
						<p class="txt-top">小黑裙淡香水30ml</p>
						<div class="txt-bottom">
							<div class="p1 clear">
								<div class="left text-pink">专柜领用</div>
								<div class="right">10,000积分</div>
							</div>
							<div class="p2 clear">
								<div class="left" v-text='shoppeStatus["finished"]'></div>
								<div class="right">2017-04-06</div>
							</div>
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
			this.SET_TITLE('兑礼及试用记录');
		},
		data() {
			return{
				type: 'gift', //gift兑礼 trial试用
			}
		},
		computed: {
			...mapState(['shippingStatus','shoppeStatus'])
		},
		methods: {
			...mapMutations(['SET_TITLE']),

		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	
	#usageRecord{
		width: 100%;
		min-height: 100%;
		background-color: #fff;
	}
	.navbar{
		display: flex;

		.nav-item{
			flex: 1;
			height: 2.133rem;
			text-align: center;
			background-color: #fff;
			line-height: 2.133rem;

			&.active{
				color: $c1;
				border-bottom: 2px solid $c1;
			}
		}
	}
	.timeline{
		height: 1.706rem;
		margin-top: 0;
		font-size: 0.512rem;
		background-color: #f5f5f5;
	}
	.giftList{
		ul li{
			height: 4.9066rem;
			border-bottom: 1px solid $c6;
			padding: 0.64rem 0.6827rem;
			display: flex;

			.imgContent{
				@include wh(3.627rem ,100%);
				border: 1px solid $c6;
				flex: none;
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.txtContent{
				flex: 1;
				height: 100%;
				padding-left: 0.3413rem;
				position: relative;

				.txt-top{
					@include font(0.64rem, 0.7rem);
				}
				.txt-bottom{
					width: 100%;
					position: absolute;
					bottom: 0;
					
					.right{
						padding-right: 0.64rem
					}
					.p1{
						font-size: 0.64rem;
					}
					.p2{
						@include sc(0.4693rem, $c4);
						.left{
							color: $c4;
						}
						.right{
							color: $c4;
						}
					}
				}
			}
		}
	}
</style>