<template>
	<div id="content userCenter">
		
	</div>
</template>

<script>
	import {checkLoginStatus} from '../commom/commom'
	import {mapState, mapMutations} from 'vuex'
	export default{
		mounted() {
			this.SET_TITLE('会员中心');
		},
		created() {
			// checkLoginStatus();
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


</style>