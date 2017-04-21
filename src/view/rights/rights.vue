<template>
	<div id="user-rights" class='content'>
		<div class="main-body">
			<div class="top-box">
				<img src="../../images/yincard.png" alt="银卡会员">
				<p class='note'>当年还需累积消费<span class='text-pink'>{{points}}元</span>，即可升级为<span class='text-pink'>金卡会员</span>，享受更多权益</p>
			</div>
			<div class="bottom-box">
				<div class="weui-cells">
			        <router-link class="weui-cell weui-cell_access" :to="{name: 'earnRecord'}" tag='li'>
			            <div class="weui-cell__hd">
			                <label class="weui-label">积分记录</label>
			            </div>
			            <div class="weui-cell__bd"></div>
			            <div class="weui-cell__ft"></div>
			        </router-link>
			        <router-link tag='div' :to="{name: 'rightsNote', params:{type: 'birth'}}" class="weui-cell weui-cell_access">
			            <div class="weui-cell__hd">
			                <label class="weui-label">生日权益</label>
			            </div>
			            <div class="weui-cell__bd text-note">生日当月消费金额1元=2积分</div>
			            <div class="weui-cell__ft"></div>
			        </router-link>
			        <router-link tag='div' :to="{name: 'rightsNote', params:{type: 'other'}}" class="weui-cell weui-cell_access">
			            <div class="weui-cell__hd">
			                <label class="weui-label">其他权益</label>
			            </div>
			            <div class="weui-cell__bd"></div>
			            <div class="weui-cell__ft"></div>
			        </router-link>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	import {setNum} from '../../common/common'
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('我的权益');
			this.points = setNum(1000);
		},
		data() {
			return{
				points: null
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),

		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';

	#user-rights{
		@include bis('../../images/bj.png');
	}
	.main-body{
		background-color: rgba(255,255,255,0.9);
	}
	.top-box{
		@include wh(100%, 42%);
		padding: 0.853rem 0.64rem 0;

		img{
			width: 100%;
			margin-bottom: 0.683rem;
		}
		p.note{
			font-size: 0.512rem;
		}
	}
	.weui-cells{
		font-size: 0.64rem;
	}
	.text-note{
		text-align: right;
	}
</style>