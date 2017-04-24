<template>
	<div id="sign-board" class='content bk-white'>
		<div class="top-box">
			<div class="main-content">
				<div class="calendar-box">
					<p class='p1'>已连续签到</p>
					<div class="calendar">
						<img src="../../images/day.png">
						<div class='day-num'><span v-text='signNum'></span>天</div>
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
				<router-link class='need-help' :to="{name:'signNote'}"><img src="../../images/help.png"></router-link>
			</div>
			<div class="day-list">
				<ul>
					<li v-for='item in dayList'>
						<div class="main-cont">
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
		<gift-list></gift-list>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	import giftList from '../gift/children/giftList'
	export default{
		mounted() {
			this.SET_TITLE('每日签到');
			let list = [{
				date: "24",
				month: "4",
				hasSign: false,
			},{
				date: "25",
				month: "4",
				hasSign: false,
			},{
				date: "26",
				month: "4",
				hasSign: false,
			},{
				date: "27",
				month: "4",
				hasSign: false,
			},{
				date: "28",
				month: "4",
				hasSign: false,
			},{
				date: "29",
				month: "4",
				hasSign: false,
			},{
				date: "30",
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
		components:{
			giftList
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

	.top-box{
		@include wh(100%, 15.5734rem);
		background-color: $c7;

		.main-content{
			@include wh(100%, 73%);
			@include bis('../../images/day-bj.png')
			position: relative;

			.need-help{
				@include wh(0.6827rem, 0.6827rem);
				position: absolute;
				top: 0.6827rem;
				right: 0.768rem;
				img{
					@include wh(100%, 100%);
				}
			}
			.calendar-box{
				@include wh(40%, 72%);
				@include center;
				text-align: center;
				position: relative;

				.p1{
					font-size: 0.5547rem;
				}
				.calendar{
					width: 70%;
					margin: 0.512rem 15% 0;
					position: relative;
					img{
						width: 100%;
					}
					.day-num{
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
		.day-list{
			@include wh(100%, 27%);
			ul{
				height: 100%;
				li{
					float: left;
					position: relative;
					@include wh(14%, 100%);

					.main-cont{
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
</style>