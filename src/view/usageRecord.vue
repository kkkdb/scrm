<template>
    <div id="usage-record" class='content bk-white'>
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
                <div class="nav-item" :class="{active: type=='gift'}" @click.prevent='changeItem("gift")'>兑礼</div>
                <div class="nav-item" :class="{active: type=='trial'}" @click.prevent='changeItem("trial")'>试用</div>
            </div>
            <div class="line"></div>
            <div class="gift-list">
                <ul>
                    <li>
                        <div class="img-content left">
                            <img src="../images/1.jpg">
                        </div>
                        <div class="txt-content">
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
                        <div class="img-content left">
                            <img src="../images/2.jpg">
                        </div>
                        <div class="txt-content">
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
                        <div class="img-content left">
                            <img src="../images/3.jpg">
                        </div>
                        <div class="txt-content">
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
                        <div class="img-content left">
                            <img src="../images/4.jpg">
                        </div>
                        <div class="txt-content">
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
                        <div class="img-content left">
                            <img src="../images/4.jpg">
                        </div>
                        <div class="txt-content">
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
                        <div class="img-content left">
                            <img src="../images/4.jpg">
                        </div>
                        <div class="txt-content">
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
                        <div class="img-content left">
                            <img src="../images/4.jpg">
                        </div>
                        <div class="txt-content">
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
    </div>
</template>

<script>
	import {setNum} from '../common/common'
	import {mapState, mapMutations} from 'vuex'
	import 'src/plugins/swiper.min.js'
	import 'src/style/swiper.min.css'
	export default{
		mounted() {
			this.SET_TITLE('兑礼及试用记录');
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
			this.month = date.getMonth() + 1;
			this.earnPoints = setNum(1005);
			this.usePoints = setNum(3000);

			this.type = 'gift';
		},
		computed:{
			...mapState(['shippingStatus','shoppeStatus']),
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
			changeItem(type){
				this.type = type;
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
		font-size: 0.64rem;
		height: 2.134rem;
		line-height: 2.134rem;
		text-align: center;
	}
	.points-box{
		height: 3.92534rem;
		text-align: center;
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
	.gift-list{
		ul li{
			height: 4.9066rem;
			border-bottom: 1px solid $c6;
			padding: 0.64rem 0.6827rem;
			display: flex;

			.img-content{
				@include wh(3.627rem ,100%);
				border: 1px solid $c6;
				flex: none;
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.txt-content{
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