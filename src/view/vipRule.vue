<template>
	<div id="vipRule">
		<div class="mainBody">
			<div class="block">
				<div class="title">会员等级</div>
				<div class="content">
					<ul>
						<li>1.会员：微信/官网注册/天猫 (提供手机号绑定)</li>
						<li>2.银卡会员：一年内累计消费满100元</li>
						<li>3.金卡会员：一年内累计消费满1,000元</li>
						<li>4.铂金会员：一年内累计消费满3,000元</li>
					</ul>
				</div>
			</div>
			<div class="block">
				<div class="title">积分规则</div>
				<div class="content">
					<ul>
						<li>1.消费积分：消费金额1元=1积分</li>
						<li>2.活动积分：</li>
						<li>注册会员：100积分 (每个手机号限1次)</li>
						<li>绑定会员：50积分 (每个手机号限1次)</li>
						<li>完善信息：100积分 (每个手机号限1次)</li>
						<li>每日签到：5积分/人/天，连续7天额外送50积分</li>
						<li>问卷调查：100积分/次，每个会员每月上限500分</li>
						<li>其他活动：以页面活动规则为准</li>
					</ul>
				</div>
			</div>
			<div class="block">
				<div class="title">有限期</div>
				<div class="content">
					<ul>
						<li>1.会员等级永久有效</li>
						<li>2.积分在自然年一年内有效，本年度累积积分会在当年12月31日后失效</li>
					</ul>
				</div>
			</div>
			<div class="block">
				<div class="title">生日权益</div>
				<div class="content">
					<ul>
						<li>1.银卡会员生日当月消费金额1元=2积分</li>
						<li>2.金卡会员生日当月消费金额1元=2积分，生日当天赠送50积分</li>
						<li>3.金卡会员生日当月消费金额1元=2积分，生日当天赠送100积分</li>
					</ul>
				</div>
			</div>
			<div class="block">
				<div class="title">使用说明</div>
				<div class="content">
					<ul>
						<li>1.每人限领一张会员卡</li>
						<li>2.会员在专柜购买时请出示会员卡或者手机号，在天猫购买时请填写会员对应的手机号，以方便积分，积分将于2个工作日内更新至微信会员卡内</li>
						<li>3.会员可使用积分在微信会员中心兑换相应的礼品或试用申请，具体兑换规则请以相应页面规则为准</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('会员制度');
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
	@import '../style/mixin';
	
	#vipRule{
		@include wh(100%, 100%);
		background-color: $c8;
	}
	.mainBody{
		@include wh(100%, 100%);
		padding: 0.64rem 0.8533rem;
	}
	.block{
		margin-bottom: 0.4rem;

		.title{
			@include sc(0.64rem, $c3);
		}
		.content ul li{
			@include sc(0.512rem, $c4);
		}
	}
</style>