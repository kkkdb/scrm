<template>
    <div id="usage-record" class='content bk-white'>
        <div class="main-box">
        	<select-time ref='pointBox' :time='time' :month_show='month_show' :type='type' :is_now='is_now' :gift-points='giftPoints' :trial-points='trialPoints'></select-time>
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
                            <img src="../../images/1.jpg">
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
                            <img src="../../images/2.jpg">
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
                            <img src="../../images/3.jpg">
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
                            <img src="../../images/4.jpg">
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
                            <img src="../../images/4.jpg">
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
                            <img src="../../images/4.jpg">
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
                            <img src="../../images/4.jpg">
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
	import {setNum} from '../../common/common'
	import selectTime from './children/selectTime'
	import {mapState, mapMutations} from 'vuex'
	import 'src/plugins/swiper.min.js'
	import 'src/style/swiper.min.css'
	export default{
		mounted() {
			this.SET_TITLE('兑礼及试用记录');
			this.getList();
		},
		components: {
			selectTime
		},
		data() {
			return{
				type: null,
				list: [],
				giftPoints: null,
				trialPoints: null,
				slideBoolean: true
			}
		},
		created(){
			let date = new Date();
			this.SET_TIME({type:'year', date: date.getFullYear()});
			this.SET_TIME({type:'month', date: date.getMonth()});

			this.type = 'gift';
		},
		computed:{
			...mapState(['shippingStatus','shoppeStatus','month', 'year']),
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
			...mapMutations(['SET_TITLE','SET_TIME']),
			setPoints(){
				let _self = this;
				let obj = _self.$refs.pointBox.$refs.swiperBox;
				let title = _self.is_now?'本月积分':(_self.month + '月积分')
    			$(obj).find('.title').text(title);
    			$(obj).find('.use-span').text(_self.trialPoints);
    			$(obj).find('.earn-span').text(_self.giftPoints);
			},
			async getList(){
				let num1 = Math.floor(Math.random()*10000);
				let num2 = Math.floor(Math.random()*10000);
				this.giftPoints = setNum(num1);
				this.trialPoints = setNum(num2);

				this.setPoints();
			},
			changeItem(type){
				this.type = type;
			}
		},
		watch:{
			month(newVal, oldval){
				if (newVal!==oldval) {
					this.getList();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	
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