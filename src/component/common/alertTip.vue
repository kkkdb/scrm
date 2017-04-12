 <template>
    <transition name="fade">
        <div class="js_dialog" id="iosDialog2">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__bd" v-text='alertText'></div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click='closeTip'>知道了</a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        mounted(){

        },
        props: ['alertText'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>