<template>
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<script>

  	export default {
    	
  	}

</script>

<style lang="scss">
  	@import './style/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
	#app{
		width: 100%;
		height: 100%;
	}
</style>
