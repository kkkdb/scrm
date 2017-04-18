<template>
	<div id="userInfo">
		<div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__hd">
	                <label class="weui-label">姓名</label>
	            </div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" placeholder="请输入姓名" v-model='formData.name'>
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell weui-cell_access">
	            <div class="weui-cell__hd">
	                <label class="weui-label">性别</label>
	            </div>
	            <div class="weui-cell__bd">
	                <span v-if='formData.sex=="famale"'>女</span>
	                <span v-else>男</span>
	            </div>
	            <div class="weui-cell__ft" @click='showSexPicker'>请选择</div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__hd">
	                <label class="weui-label">手机号</label>
	            </div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" type='tel' placeholder="请输入手机号" v-model='formData.mobile' maxlength="11">
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell">
	            <div class="weui-cell__hd">
	                <label class="weui-label">邮箱</label>
	            </div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" type='text' placeholder="请输入邮箱" v-model='formData.email'>
	            </div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell weui-cell_access">
	            <div class="weui-cell__hd">
	                <label class="weui-label">生日</label>
	            </div>
	            <div class="weui-cell__bd">
	                {{formData.birthday}}
	            </div>
	            <div class="weui-cell__ft" @click='showDatePicker'>请选择</div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell weui-cell_access">
	            <div class="weui-cell__hd">
	                <label class="weui-label">所在地区</label>
	            </div>
	            <div class="weui-cell__bd">
	            	<input type="hidden" id='city-picker'/>
	                {{pcd}}
	            </div>
	            <div class="weui-cell__ft" @click.prevent.stop='showPcdPicker'>请选择</div>
	        </div>
	    </div>
	    <div class="weui-cells">
	        <div class="weui-cell weui-cell_access">
	            <div class="weui-cell__hd">
	                <label class="weui-label">街道</label>
	            </div>
	            <div class="weui-cell__bd">
	                {{formData.street}}
	            </div>
	            <div class="weui-cell__ft" @click='showStreetPicker'>请选择</div>
	        </div>
	    </div>
	    <div class="weui-cells">
	    	<div class="weui-cell">
	    		<div class="weui-cell__bd">
		          	<textarea class="weui-textarea" placeholder="请填写详细地址" rows="3" v-model='formData.shipping_address'></textarea>
		        </div>
	    	</div>
	    </div>
	    <div class="weui-cells weui-cells-callway">
	    	<div class="weui-cell">
	    		<div class="callTxt">希望沟通方式</div>
	    		<div class="callWays">
	    			<ul>
	    				<li v-for='item in callWayArr' @click='item.check = !item.check'><i class='check' :class="{checked: item.check}"></i>{{item.label}}</li>
	    			</ul>
	    		</div>
	    	</div>
	    </div>
	    <div class="weui-cells">
	    	<div class="weui-cell">
	    		<button class="btn-primary btn-block" @click='submit'>确定</button>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('完善资料');
			let _self = this;

			$("#city-picker").cityPicker({
			    title: "请选择所在地区",
			    onChange(a,b,c) {
			    	_self.formData.province_name = c[0];
			    	_self.formData.province_id = b[0];
			    	_self.formData.city_name = c[1];
			    	_self.formData.city_id = b[1];
			    	_self.formData.district_name = c[2];
			    	_self.formData.district_id = b[2];
			    }
		  	});
		},
		data() {
			return{
				formData: {
					name: '', //姓名
					sex: 'male', //性别
					mobile: '', //手机号码
					email: '', //邮箱
					birthday: '', //生日
					province_name: '', //省
					province_id: '',
					city_name: '', //市
					city_id: '',
					district_name: '', //区
					distict_id: '',
					street: '', //街道
				},
				callWayArr: [{ //沟通方式
					label: '短信',
					value: 'msg',
					check: false
				},{
					label: '邮件',
					value: 'email',
					check: false
				},{
					label: '电话',
					value: 'tel',
					check: false
				},{
					label: '邮寄',
					value: 'post',
					check: false
				}]
			}
		},
		computed: {
			pcd (){
				return this.formData.province_name + " " + this.formData.city_name + " " + this.formData.district_name
			}
		},
		methods: {
			...mapMutations(['SET_TITLE']),
			showSexPicker(){
				let _self = this;
				weui.picker([{
		            label: '男',
		            value: 'male'
		        }, {
		            label: '女',
		            value: 'famale'
		        }], {
		        	defaultValue: ['male'],
		            onConfirm: function (result) {
		            	_self.formData.sex = result[0];
		            }
		        });
		        $(".weui-mask").css('visibility', 'visible');
			},
			showDatePicker() {
				let _self = this;
				weui.datePicker({
		            start: 1950,
		            end: new Date().getFullYear(),
		            defaultValue: [1990, 1, 1],
		            onConfirm: function (result) {
		                _self.formData.birthday = result[0] + '-' + (result[1]<10?("0"+result[1]):result[1]) + '-' + (result[2]<10?("0"+result[2]):result[2]);
		            }
		        });
		        $(".weui-mask").css('visibility', 'visible');
			},
			showPcdPicker() {
				$("#city-picker").trigger('click');
			},
			showStreetPicker() {

			},
			submit(){
				if(this.confirm()){

				}
			},
			confirm(){
				if ($.trim(this.formData.name) == '') {
					$.alert('请输入姓名');
					return false;
				}
				if (!(/^1\d{10}$/gi.test(this.formData.mobile))) {
					$.alert('手机号格式有误');
					return false;
				}
				if (!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.formData.email))) {
					$.alert('邮箱格式有误');
					return false;
				}
				if (this.formData.birthday == '') {
					$.alert('请选择生日');
					return false;
				}
				if (this.formData.province_name == '') {
					$.alert('请选择所在地区');
					return false;
				}
				if (this.formData.street == '') {
					$.alert('请选择街道');
					return false;
				}
				if ($.trim(this.formData.shipping_address) == '') {
					$.alert('详细地址不得为空');
					return false;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	
	#userInfo{
		@include wh(100%, 100%);
		background-color: $c8;
	}
	.weui-cells{
		@include sc(0.64rem, $c3);
		margin-top: 0;
	}
	.weui-cell{
		padding: 14px 15px;
	}
	.weui-cell__hd{
		width: 23.5%;

		.weui-label{
			width: 100%;
		}
	}
	.weui-cells-callway .weui-cell{
		height: 3.83872rem;
	}
	.callTxt{
		@include wh(35%, 100%);
	}
	.callWays{
		width: 65%;

		ul li{
			float: left;
			width: 25%;
			margin-right: 25%;
			margin-bottom: 0.4266rem;

			.check{
				display: inline-block;
				margin-right: 0.2133rem;
				@include wh(0.64rem, 0.64rem);
				@include bis('../images/check.png')
			}
			.checked{
				@include bis('../images/checked.png')
			}
		}
	}
	
</style>