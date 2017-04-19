<template>
	<div id="signNote">
		<h4 class='title'>签到说明</h4>
		<ul>
			<li><span>1.</span>每人每天最多签到一次，每次签到获得X积分奖励。</li>
			<li><span>2.</span>连续签到7天可获得额外X积分奖励。</li>
			<li><span>3.</span>对使用不正当手段（包括但不限于作弊、扰乱系统、实施网络攻击等）参与活动的用户，[XXXX品牌名]有权取消其获奖资格，并禁止其参与活动。（若奖励已经发放，则[XXXX品牌名]有权追回）。</li>
			<li><span>4.</span>您可在积分记录中查询签到所获的积分记录。</li>
		</ul>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('签到说明');
		},
		data() {
			return{

			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),

		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	
	#signNote{
		background-color: $c8;
		min-height: 100%;
		.title{
			line-height: 1.5rem;
			margin-left: 0.2rem;
			font-size: 0.75rem;
		}
		ul li{
			position: relative;
			font-size: 0.64rem;
			padding: 0 0.25rem 0 1rem;

			span{
				position: absolute;
				left: 0.2rem;
			}
		}
		
	}

</style>