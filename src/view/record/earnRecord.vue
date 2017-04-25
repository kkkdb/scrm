<template>
	<div id="earn-record" class='content bk-white'>
		<div class="main-box">
			<select-time ref='pointBox' :time='time' :month_show='month_show' :type='type' :is_now='is_now' :earn-points='earnPoints' :use-points='usePoints'></select-time>
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
	import {setNum} from '../../common/common'
	import selectTime from './children/selectTime'
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			let _self = this;
			this.SET_TITLE('积分记录');
			this.getList();
		},
		components:{
			selectTime
		},
		data() {
			return{
				type: null,
				list: [],
				earnPoints: null,
				usePoints: null,
				slideBoolean: true
			}
		},
		created(){
			let date = new Date();
			this.SET_TIME({type:'year', date: date.getFullYear()});
			this.SET_TIME({type:'month', date: date.getMonth()});

			this.type = 'earn';
		},
		computed:{
			...mapState(['month', 'year']),
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
				let num1 = Math.floor(Math.random()*10000);
				let num2 = Math.floor(Math.random()*10000);
				this.earnPoints = setNum(num1);
				this.usePoints = setNum(num2);
				this.list = list;
				this.setPoints();
			},
			async changeItem(_type){
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
			}

		},
		watch:{
			month(newVal, oldval){
				if (newVal!=oldval) {
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