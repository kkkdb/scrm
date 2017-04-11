<template>
	<div>1234</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default{
		data () {
			return {

			}
		},
		mounted () {
			this.SET_TITLE('会员绑定');
		},
		methods:{
			...mapMutations(['SET_TITLE'])
		}
	}
</script>

<style lang="sass" scoped>
	
</style>