<template>
	<div id="earnRecord">
		<div class="navbar">
			<div class="nav-item" :class="{active: type=='earn'}" @click.prevent='changeItem("earn")'>获取</div>
			<div class="nav-item" :class="{active: type=='use'}" @click.prevent='changeItem("use")'>使用</div>
		</div>
		<div class="weui-cells timeline">
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__hd">
	                <label class="weui-label" style='width: 50px;'>本月</label>
	            </div>
	            <div class="weui-cell__bd">
	            	<p v-if="type=='earn'"><span class='text-note'>获取：</span> <span class='text-pink'>{{totalNum}}</span></p>
	            	<p v-else><span class='text-note'>使用：</span> {{totalNum}}</p>
	            </div>
	            <div class="weui-cell__ft">2017年4月</div>
			</div>
		</div>
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
</template>

<script>
	import {setNum} from '../common/common'
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('积分记录');
			this.getList();
		},
		data() {
			return{
				type: 'earn',

				list: [],
				totalNum: null,
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),
			getList(){
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
				this.totalNum = setNum(1005);
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
					this.totalNum = setNum(1005);
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
					this.totalNum = setNum(3000);
				}
				list.forEach((item)=>{
					item.num = setNum(item.num);
				})
				this.list = list;
			}

		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	
	#earnRecord{
		width: 100%;
		min-height: 100%;
		background-color: $c8;
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