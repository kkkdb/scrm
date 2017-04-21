<template>
	<div id="earn-record" class='content bk-white'>
		<div class="main-box">
			<div class="timeline" @click.prevent.stop='changeTime'>
				{{time}} <i class="fa fa-caret-down"></i>
				<input type="hidden" id='picker' v-model='time'>
			</div>
			<div class="line"></div>
			<div class="swiper-container" ref='pointBox'>
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
						<div class="points-box">
							<div class="turn-left"><i class="fa fa-caret-left"></i></div>
							<div class="turn-right"><i class="fa fa-caret-right"></i></div>
							<div class='title'>
								<template v-if='is_now'>本月</template><template v-else>{{month_show}}</template>积分
							</div>
				        	<div class='total-points'>
				        		<div class="flex" style="border-right: 1px sodivd #dedede;">
					        		<span class='earn-span text-pink'>{{earnPoints}}</span> 获取积分
				        		</div>
				        		<div class="flex">
				        			<span class='use-span text-pink'>{{usePoints}}</span> 使用积分
				        		</div>
				        	</div>
						</div>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<div class="navbar">
				<div class="nav-item" :class="{active: type=='earn'}" @click.prevent='changeItem("earn")'>获取</div>
				<div class="nav-item" :class="{active: type=='use'}" @click.prevent='changeItem("use")'>使用</div>
			</div>
			<div class="line"></div>
			<div class="list">
				<ul>
					<li v-for='item in list'>
						<div class="way">
							<p v-text='item.name'></p>
							<p class='time' v-text='item.time'></p>
						</div>
						<div class="num"><template v-if='type=="earn"'>+</template><template v-else>-</template>{{item.num}}</div>
					</li>
				</ul>
			</div>			        		
    	</div>
	</div>
</template>

<script>
	import {setNum} from '../common/common'
	import {mapState, mapMutations} from 'vuex'
	import 'src/plugins/swiper.min.js'
	import 'src/style/swiper.min.css'
	export default{
		mounted() {
			let _self = this;
			this.SET_TITLE('积分记录');
			this.getList();
			$("#picker").picker({
				title: "选择年月",
				cols: [
					{
						textAlign: 'center',
						displayValues: ['2016年', '2017年', '2018年'],
						values: [2016,2017,2018]
					},
					{
						textAlign: 'center',
						displayValues: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
						values: [1,2,3,4,5,6,7,8,9,10,11,12]
					}
				],
				onChange(a,b,c){
					_self.year = b[0];
					_self.month = b[1];
					_self.year_show = c[0];
					_self.month_show = c[1];
				},
				onClose(){
					_self.hasChange = true;
				}
			});

			//初始化swiper
        	new Swiper('.swiper-container', {
        		loop: true,
        		onSlideNextStart(swiper){
        			if(_self.month==12){
						_self.month = 1;
						_self.year = Number(_self.year) + 1;
					}else{
						_self.month = Number(_self.month) + 1;
					}
					_self.setPoints();
        		},
        		onSlidePrevStart(swiper){
        			if(_self.month==1){
						_self.month = 12;
						_self.year = Number(_self.year) - 1;
					}else{
						_self.month = Number(_self.month) - 1;
					}
					_self.setPoints();
        		}
		    });
		},
		data() {
			return{
				type: null,
				month: null,
				year: null,
				list: [],
				earnPoints: null,
				usePoints: null,
				hasChange: false,
				slideBoolean: true
			}
		},
		created(){
			let date = new Date();
			this.year = date.getFullYear();
			this.month = date.getMonth();

			this.type = 'earn';
		},
		computed:{
			...mapState(['alVue']),
			year_show(){
				return this.year + '年'
			},
			month_show(){
				return this.month + '月'
			},
			time (){
				return this.year_show + this.month_show
			},
			is_now(){
				let date = new Date();
				if(date.getMonth() + 1 == this.month && date.getFullYear() == this.year){
					return true
				}
				return false
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),
			setPoints(){
				let _self = this;
				let obj = _self.$refs.pointBox;
				let title = _self.is_now?'本月积分':(_self.month + '月积分')
    			$(obj).find('.title').text(title);
    			$(obj).find('.use-span').text(_self.usePoints);
    			$(obj).find('.earn-span').text(_self.earnPoints);
			},
			async getList(){
				let list = [{
					name: '消费积分 (天猫旗舰店)',
					time: '2017-04-14',
					num: '1000',
				},{
					name: '签到积分 (天猫旗舰店)',
					time: '2017-03-06',
					num: '5',
				}];
				list.forEach((item)=>{
					item.num = setNum(item.num);
				})
				this.earnPoints = setNum(1005);
				this.usePoints = setNum(3000);
				this.list = list;
			},
			changeItem(_type){
				this.type = _type;
				let list = [];
				if (_type == 'earn') {
					list = [{
						name: '消费积分 (天猫旗舰店)',
						time: '2017-04-14',
						num: '1000',
					},{
						name: '签到积分 (天猫旗舰店)',
						time: '2017-03-06',
						num: '5',
					}];
				}else{
					list = [{
						name: '积分兑礼',
						time: '2017-04-14',
						num: '1000',
					},{
						name: '试用申请',
						time: '2017-03-26',
						num: '2000',
					}];
				}
				list.forEach((item)=>{
					item.num = setNum(item.num);
				})
				this.list = list;
			},
			changeTime(){
				var _self = this;
				$('#picker').trigger('click');
				$("#picker").picker("setValue", [_self.year,_self.month]);
			}

		},
		watch:{
			hasChange(newVal){
				if (newVal) {
					//await this.getList();
					console.log('触发搜索');
					this.hasChange = false;
					this.setPoints();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';

	#earn-record{
		width: 100%;
		min-height: 100%;
		background-color: $c8;
	}

	.navbar{
		display: flex;

		.nav-item{
			flex: 1;
			height: 2.134rem;
			text-align: center;
			background-color: #fff;
			line-height: 2.134rem;

			&.active{
				color: $c1;
				border-bottom: 2px solid $c1;
			}
		}
	}
	.timeline{
		font-size: 0.64rem;
		height: 2.134rem;
		line-height: 2.134rem;
		text-align: center;
	}
	.points-box{
		height: 3.92534rem;
		text-align: center;
		position: relative;
		.turn-left{
			@include ct;
			left: 0.2rem;
		}
		.turn-right{
			@include ct;
			right: 0.2rem
		}
		.title{
			font-size: 0.5547rem;
			line-height: 1.75rem;
			color: $c4;
		}
		.total-points{
			display: flex;
			.flex{
				flex: 1;
				text-align: center;
				font-size: 0.5547rem;
				span{
					font-size: 0.8534rem;
				}
			}
		}
	}
	.line{
		height: 0.2rem;
		background-color: #f5f5f5;
	}
	
	.list ul li{
		padding: 0.4rem 0.64rem;
		display: flex;
		font-size: 0.5466rem;
		border-bottom: 1px solid $c6;

		.way{
			height: 1.7067rem;
			flex: 1;
			.time{
				@include sc(0.512rem, $c4);
			}
		}
		.num{
			height: 1.7067rem;
			line-height: 1.7067rem;
			flex: 1;
			text-align: right;
		}
	}

</style>