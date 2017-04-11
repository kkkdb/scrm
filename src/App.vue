<template>
	<div class="wrapper">
		<router-view></router-view>
		<foot-guide></foot-guide>
	</div>
</template>

<script>
import footGuide from './component/footGuide'

export default{
	data () {
		return{

		}
	},
	components: {
		footGuide: footGuide
	}
}
</script>

<style lang="sass">
	@import './css/common';
</style>