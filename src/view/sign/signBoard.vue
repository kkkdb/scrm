<template>
	<div id="signBoard">
		<div class="topBox">
			<div class="mainContent">
				<div class="calendarBox">
					<p class='p1'>已连续签到</p>
					<div class="calendar">
						<img src="../../images/day.png">
						<div class='dayNum'><span v-text='signNum'></span>天</div>
					</div>
					<p class='p2'>
						<template v-if='hasSign'>
							连续签到有更多惊喜哦
						</template>
						<template v-else>
							今日签到可领<span class='text-pink'>5积分</span>							
						</template>
					</p>
					<button class="btn-default" v-if='hasSign'>今日已签到</button>
					<button class="btn-primary" v-else @click='sign'>签 到</button>
				</div>
				<router-link class='needHelp' :to="{name:'signNote'}"><img src="../../images/help.png"></router-link>
			</div>
			<div class="dayList">
				<ul>
					<li v-for='item in dayList'>
						<div class="mainCont">
							<div class="circle" :class="{active: item.hasSign, today: item.ready}">+5</div>
							<p v-if='item.attr'>
								<span v-if='item.attr=="today"' style="color: #333;">今日</span>
								<span v-if='item.attr=="yesterday"'>昨日</span>
								<span v-if='item.attr=="tomorrow"'>明日</span>
							</p>
							<p v-else>{{item.month}}-{{item.date}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="giftList">
			<div class="head"><img src="../../images/giftHead.png" alt="积分兑礼"></div>
			<ul class="list">
				<li>
					<div class="item-points"><span>2,000</span> 积分</div>
					<div class="item-bottom">
						<div class="left">
							<img src="../../images/1.jpg">
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
							<img src="../../images/2.jpg">
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
							<img src="../../images/3.jpg">
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
							<img src="../../images/4.jpg">
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
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('每日签到');
			let list = [{
				date: "17",
				month: "4",
				hasSign: true,
			},{
				date: "18",
				month: "4",
				hasSign: false,
			},{
				date: "19",
				month: "4",
				hasSign: false,
			},{
				date: "20",
				month: "4",
				hasSign: false,
			},{
				date: "21",
				month: "4",
				hasSign: false,
			},{
				date: "22",
				month: "4",
				hasSign: false,
			},{
				date: "23",
				month: "4",
				hasSign: false,
			}];
			let nowDate = new Date();
			let date = nowDate.getDate();
			let month = nowDate.getMonth() + 1;
			list.forEach((item, index)=>{
				if (item.date == date && item.month == month) {
					item.attr = 'today';
					index-1>-1?list[index-1].attr = 'yesterday':"";
					index+1<list.length?list[index+1].attr = 'tomorrow':"";
					if (item.hasSign) {
						index+1<list.length?list[index+1].ready = true:"";
					}else{
						item.ready = true;
					}
				}
			})
			this.dayList = list;
		},
		data() {
			return{
				dayList: [],
				signNum: 2,
				hasSign: false,
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),
			sign () {
				this.hasSign = true;
				this.signNum++;
				this.dayList.forEach((item, index)=>{
					if (item.attr == 'today') {
						item.hasSign = true;
						index+1<this.dayList.length?this.dayList[index+1].ready = true:'';
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';

	#signBoard{
		width: 100%;
		min-height: 100%;
		background-color: $c8;
	}
	.topBox{
		@include wh(100%, 15.5734rem);
		background-color: $c7;

		.mainContent{
			@include wh(100%, 73%);
			@include bis('../../images/day-bj.png')
			position: relative;

			.needHelp{
				@include wh(0.6827rem, 0.6827rem);
				position: absolute;
				top: 0.6827rem;
				right: 0.768rem;
				img{
					@include wh(100%, 100%);
				}
			}
			.calendarBox{
				@include wh(35%, 72%);
				@include center;
				text-align: center;
				position: relative;

				.p1{
					font-size: 0.5547rem;
				}
				.calendar{
					width: 80%;
					margin: 0.512rem 10% 0;
					position: relative;
					img{
						width: 100%;
					}
					.dayNum{
						position: absolute;
						@include center;
						font-size: 0.5547rem;
						span{
							font-size: 1.7067rem;
							font-family: 'SimHei';
						}
					}
				}
				.p2{
					font-size: 0.55rem;
					margin: 0.2rem 0 0.3rem;
				}
				button{
					width: 100%;
					font-size: 0.64rem;
				}
			}
		}
		.dayList{
			@include wh(100%, 27%);
			ul{
				height: 100%;
				li{
					float: left;
					position: relative;
					@include wh(14%, 100%);

					.mainCont{
						@include wh(1.792rem, 72%);
						@include center;
						text-align: center;
						.circle{
							@include wh(1.792rem, 1.792rem);
							@include borderRadius(100%);
							font-size: 0.5547rem;
							border: 1px solid $c6;
							background-color: $c8;
							line-height: 1.792rem;
							&.today{
								color: $c1;
								border: 1px solid $c1;
							}
							&.active{
								color: $c8;
								background-color: $c1;
							}
						}
						p{
							font-size: 0.46934rem;
							color: $c4;
							margin-top: 0.2rem;
							span{
								color: $c4;
							}
						}
					}
				}
				li:nth-of-type(1){
					margin-left: 1%;
				}
			}
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