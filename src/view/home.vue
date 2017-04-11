<template>
	<div>
		<head-top headTitle="首页"></head-top>
		<span>hello</span>
		<foot-guide></foot-guide>
	</div>
</template>

<script>
	import headTop from '../component/headTop'
	import footGuide from '../component/footGuide'
	export default{
		data(){
			return{
				
			}
		},
		components: {
			headTop,
			footGuide
		}
	}
</script>