<template>
	<div id="gift">
		<div class="mainBox">
			<div class="topHead">
				<div class="txt">
					<p>尊敬的用户,</p>
					<p>截止{{date}},您当前年度的剩余积分为<span class="text-pink">{{points}}分</span>。</p>
					<p>积分有效期至<span class="text-pink">{{year}}-12-31</span>。请根据您的剩余可用积分兑换礼品，请在有效期内申请兑礼。</p>					
				</div>
			</div>
			<div class="giftList">
				<div class="head"><img src="../images/giftHead.png" alt="积分兑礼"></div>
				<ul class="list">
					<li>
						<div class="item-points"><span>2,000</span> 积分</div>
						<div class="item-bottom">
							<div class="left">
								<img src="../images/1.jpg">
							</div>
							<div class="right">
								<p class="name text-pink">帝皇蜂姿修复蜜润柔肤水30ml</p>
								<p class="style_value">紧致、嫩滑</p>
								<router-link :to="{name: 'formConfirm', params:{type: 'gift'}}" tag='button' class="btn-primary">立即兑换</router-link>
							</div>
						</div>
					</li>
					<li>
						<div class="item-points"><span>4,000</span> 积分</div>
						<div class="item-bottom">
							<div class="left">
								<img src="../images/2.jpg">
								<div class="mask">
									<div class="maskTxt">积分不足</div>
								</div>
							</div>
							<div class="right">
								<p class="name text-pink">幻彩流星蜜粉饼</p>
								<p class="style_value">粉饼装的幻彩流星 至纯光芒</p>
								<button class="btn-default">立即兑换</button>
							</div>
						</div>
					</li>
					<li>
						<div class="item-points"><span>8,000</span> 积分</div>
						<div class="item-bottom">
							<div class="left">
								<img src="../images/3.jpg">
								<div class="mask">
									<div class="maskTxt">积分不足</div>
								</div>
							</div>
							<div class="right">
								<p class="name text-pink">幻彩流星亮肤修颜液</p>
								<p class="style_value">珠光底妆 为你塑造梦幻亮肤</p>
								<button class="btn-default">立即兑换</button>
							</div>
						</div>
					</li>
					<li>
						<div class="item-points"><span>10,000</span> 积分 <i class="text-note">(金卡/白金卡会员专享)</i></div>
						<div class="item-bottom">
							<div class="left">
								<img src="../images/4.jpg">
								<div class="mask">
									<div class="maskTxt">会员等级不符</div>
								</div>
							</div>
							<div class="right">
								<p class="name text-pink">小黑裙淡香水30ml</p>
								<p class="style_value">珠光底妆 为你塑造梦幻亮肤</p>
								<button class="btn-default">立即兑换</button>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {setNum, getDateStr} from '../common/common'
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('积分兑礼');
			this.points = setNum(2000);
			this.year = new Date().getFullYear();
			this.date = getDateStr(0);
		},
		data() {
			return{
				year: '',
				points: '',
				date: '',

				list:[{
					name: '', //名称
					style_value: '', //几个字介绍
					imgUrl: '', //图片路径
					needPoints: '', //兑换所需积分
					needLevel: '', //兑换所需等级
				}]
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	
	#gift{
		width: 100%;
		min-height: 100%;
	}
	.mainBox{
		width: 100%;
		height: 100%;
		background-color: $c8;
	}
	.topHead{
		@include wh(100%, 5.12rem);
		padding:0.5rem 0.5rem 0;
		@include font(0.5546rem, 1rem);

		.txt{
			@include wh(100%, 100%);
			padding: 0 0.14rem;
			border-bottom: 1px solid $c6;
		}
	}
	.giftList{
		padding: 1.066rem 1.066rem 0 1.706rem;

		.head{
			@include wh(100%, 0.64rem);
			position: relative;
			img{
				height: 100%;
				@include center;
			}
			margin-bottom: 0.64rem;
		}
		.list{
			li{
				@include wh(100%, 7rem);
				margin-bottom: 1rem;
				.item-points{
					font-size: 0.5546rem;
					margin-bottom: 0.24rem;
					span{
						font-size: 0.8533rem;
					}
				}
				.item-bottom{
					@include wh(100%, 80%);
					.left{
						@include wh(45%, 100%);
						position: relative;
						img{
							@include wh(100%, 100%);
							object-fit: cover;
						}
						.mask{
							@include center;
							@include wh(50%, 50%);
							@include borderRadius(100%);
							background-color: rgba(0,0,0,0.5);
							text-align: center;
							.maskTxt{
								width: 100%;
								@include center;
								@include font(0.59733rem, 0.768rem);
								color: $c8;
							}
						}
					} 
					.right{
						@include wh(55%, 100%);
						padding-top: 0.8533rem;

						p{
							@include font(0.512rem, 1rem);
						}
						button{
							margin-top: 0.2rem;
						}
					}
				}
			}
		}
	}
</style>