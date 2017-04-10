<template>
    <div>
        <!-- 底边栏导航公共模块 -->
        <bottom-bar></bottom-bar>
        <!-- 路由导航的不同主内容区 -->
        <div id="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import bottomBar from '../component/bottomBar'

export default {
    components: {
        'bottomBar': bottomBar
    }
}
</script>