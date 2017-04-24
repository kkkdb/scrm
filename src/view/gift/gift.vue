<template>
	<div id="gift" class='content'>
		<div class="main-box bk-white">
			<div class="top-head">
				<div class="txt">
					<p>尊敬的用户,</p>
					<p>截止{{date}},您当前年度的剩余积分为<span class="text-pink">{{points}}分</span>。</p>
					<p>积分有效期至<span class="text-pink">{{year}}-12-31</span>。请根据您的剩余可用积分兑换礼品，请在有效期内申请兑礼。</p>	
				</div>
			</div>
			<gift-list></gift-list>
		</div>
	</div>
</template>

<script>
	import {setNum, getDateStr} from '../../common/common'
	import giftList from './children/giftList'
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('积分兑礼');
			this.points = setNum(2000);
			this.year = new Date().getFullYear();
			this.date = getDateStr(0);
		},
		components:{
			giftList
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
	@import '../../style/mixin';
	
	.top-head{
		@include wh(100%, 5.12rem);
		padding:0.5rem 0.5rem 0;
		@include font(0.5546rem, 1rem);

		.txt{
			@include wh(100%, 100%);
			padding: 0 0.14rem;
			border-bottom: 1px solid $c6;
		}
	}
</style>