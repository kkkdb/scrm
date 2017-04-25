<template>
	<section>
		<div class="timeline" @click.prevent.stop='changeTime'>
			{{time}} <i class="fa fa-caret-down"></i>
			<input type="hidden" id='picker' v-model='time'>
		</div>
		<div class="line"></div>
		<div class="swiper-container" ref='swiperBox'>
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
			        			<template v-if='type=="earn"||type=="use"'>
				        			<span class='earn-span text-pink'>{{earnPoints}}</span> 获取积分
			        			</template>
			        			<template v-else>
			        				<span class='earn-span text-pink'>{{giftPoints}}</span> 兑礼积分
			        			</template>
			        		</div>
			        		<div class="flex">
			        			<template v-if='type=="earn"||type=="use"'>
			        				<span class='use-span text-pink'>{{usePoints}}</span> 使用积分
			        			</template>
			        			<template v-else>
			        				<span class='use-span text-pink'>{{trialPoints}}</span> 试用积分
			        			</template>
			        		</div>
			        	</div>
					</div>
				</div>
			</div>
		</div>
		<div class="line"></div>		
	</section>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	import 'src/plugins/swiper.min.js';
	import 'src/style/swiper.min.css';
	export default{
		props: ['time','month_show','is_now','earnPoints','usePoints','giftPoints','trialPoints','type'],
		data () {
			return {

			}
		},
		computed:{			
			...mapState(['month', 'year']),
		},
		mounted(){
			let _self = this;
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
				onClose(result){
					_self.SET_TIME({type:'year', date: result.cols[0].value});
					_self.SET_TIME({type:'month', date: result.cols[1].value});
				}
			});

			//初始化swiper
	    	new Swiper('.swiper-container', {
	    		loop: true,
	    		onSlideNextStart(swiper){
	    			if(_self.month==12){
						_self.SET_TIME({type:'month', date: 1});
						_self.SET_TIME({type:'year', date: Number(_self.year) + 1});
					}else{
						_self.SET_TIME({type:'month', date: Number(_self.month) + 1});
					}					
	    		},
	    		onSlidePrevStart(swiper){
	    			if(_self.month==1){
						_self.SET_TIME({type:'month', date: 12});
						_self.SET_TIME({type:'year', date: Number(_self.year) - 1});
					}else{
						_self.SET_TIME({type:'month', date: Number(_self.month) - 1});
					}					
	    		}
		    });
		},
		methods:{
			...mapMutations(['SET_TIME']),			
			changeTime(){
				var _self = this;
				$('#picker').trigger('click');
				$("#picker").picker("setValue", [_self.year,_self.month]);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../style/mixin';
	@import url(http://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css);
	
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
			width: 5%;
			@include ct;
			left: 0;
		}
		.turn-right{
			width: 5%;
			@include ct;
			right: 0;
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
</style>