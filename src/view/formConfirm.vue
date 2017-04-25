<template>
	<div id="form-confirm" class='content bk-white'>
		<div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__hd" style="width: 70%;">
	                <label class="weui-label" style="width: 100%;">帝皇蜂姿修复蜜润柔肤水30ml</label>
	            </div>
	            <div class="weui-cell__bd"></div>
	            <div class="weui-cell__ft" style="color: #333;">2,000积分</div>
	        </div>
	    </div>
		<div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__hd">
	                <label class="weui-label">
	                	<template v-if='type=="gift"'>兑礼方式</template>
	                	<template v-else>领用方式</template>
	                </label>
	            </div>
	            <div class="weui-cell__bd">
	                <template v-if='way=="shipping"'>快递寄送</template>
	                <template v-else>专柜领用</template>
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__hd">
	                <label class="weui-label">收货人</label>
	            </div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" placeholder="请输入姓名" v-model='formData.name'>
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__hd">
	                <label class="weui-label">联系电话</label>
	            </div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" type='tel' placeholder="请输入手机号" v-model='formData.mobile' maxlength="11">
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell weui-cell_access">
	            <div class="weui-cell__hd">
	                <label class="weui-label">所在地区</label>
	            </div>
	            <div class="weui-cell__bd">
	            	<input type="hidden" id='city-picker'/>
	                {{formData.pcd}}
	            </div>
	            <div class="weui-cell__ft">请选择</div>
	        </div>
	    </div>
	    <div class="weui-cells" v-if="way=='shipping'">
	        <div class="weui-cell weui-cell_access">
	            <div class="weui-cell__hd">
	                <label class="weui-label">街道</label>
	            </div>
	            <div class="weui-cell__bd">
	                {{formData.street}}
	            </div>
	            <div class="weui-cell__ft">请选择</div>
	        </div>
	    </div>
	    <div class="weui-cells" v-if="way=='shipping'">
	    	<div class="weui-cell">
	    		<div class="weui-cell__bd">
		          	<textarea class="weui-textarea" placeholder="请填写详细地址" rows="3"></textarea>
		        </div>
	    	</div>
	    </div>
	    <div class="weui-cells" v-if="way=='shoppe'">
	    	<div class="weui-cell weui-cell_access">
	            <div class="weui-cell__hd">
	                <label class="weui-label">选择专柜</label>
	            </div>
	            <div class="weui-cell__bd">
	                {{formData.shoppe}}
	            </div>
	            <div class="weui-cell__ft">请选择</div>
	        </div>
	    </div>
	    <div class="weui-cells">
	    	<div class="weui-cell">
	    		<button class="btn-primary btn-block">确定</button>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			let title = this.type == 'gift'?'积分兑礼':'试用申请';
			this.SET_TITLE(title);
		},
		data() {
			return{
				type: this.$route.params.type,
				way: 'shoppe', //shipping 快递寄送 shoppe 专柜领用
				formData: {
					name: '',
					mobile: '',
					pcd: '',
					street: '',
					shoppe: '',
				}
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	.weui-cells {
	    font-size: 0.64rem;
	    color: $c3;
	    margin-top: 0;
	}
	.weui-cell {
	    padding: 14px 15px;
	}
</style>