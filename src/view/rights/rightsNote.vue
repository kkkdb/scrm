<template>
	<div id="sign-note" class='content bk-white'>
		<h4 class='title' v-text='title'></h4>
		<ul v-if='type=="birth"'>
			<li><span>1.</span>在您的生日当月消费金额1元=2积分。</li>
			<li><span>2.</span>为确保您正常获取生日权益，请在会员中心完善您的个人资料。</li>
		</ul>
		<ul v-else>
			<li><span>1.</span>您还可享受当前会员等级所对应的积分兑礼和试用申请。</li>
			<li><span>2.</span>积分兑礼：您可以使用积分兑换相应的礼品，具体请以【积分兑礼】页面为准。兑礼的礼品不可申请退货。</li>
			<li><span>3.</span>试用申请：包括免费试用、积分试用、付邮试用，具体请以【试用申请】页面为准。使用产品不可申请退货。</li>
		</ul>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.title = this.type == 'birth'?"生日权益":"其他权益";
			this.SET_TITLE(this.title);
		},
		data() {
			return{
				type: '',
				title: '',
			}
		},
		created(){
			this.type = this.$route.params.type;
		},
		methods: {
			...mapMutations(['SET_TITLE']),

		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
	
	#sign-note{
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