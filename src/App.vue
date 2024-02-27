<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Header from './components/Header.vue';
// import SwitchAnimation from './components/switch/index.vue'
import { useStore } from './stores/common';
import { storeToRefs } from 'pinia'

let showRootBg = ref(false)
let router = useRouter()
let showSwitchAnimation = ref(false)
let animationType = ref('leave')

const mainStore = useStore()
let { switchType } = storeToRefs(mainStore)


/**
 * 动画子组件的执行的回调，用于处理动画的切换和隐藏
 * @param type 当前执行的动画的类型
 */
// const switchFinish = (type:string)=> {
//     if (type == 'leave') {
//         animationType.value = 'enter'
//         showSwitchAnimation.value = true
//     } else {
//         animationType.value = 'leave'
//         showSwitchAnimation.value = false
//     }
// }

/**
 *  监听store的切换的逻辑，展示动画
 */
watch(()=> switchType, (val)=> {
    if (val.value == 'leave') {
        showSwitchAnimation.value = true
        animationType.value = 'leave'
    }
})


/**
 * 监听路由的值，根据meta配置决定是否启用背景
 */
watch(()=> router.currentRoute.value, (curRoute)=> {
    let _showRootBg = 'rootBg' in curRoute.meta ? !!(curRoute.meta.rootBg) : true
    showRootBg.value = _showRootBg
}, {
    immediate: true,
    deep: true
})

</script>
<template>
    <Header></Header>
    <RouterView></RouterView>
    <Teleport to="body">
        <div v-show="showRootBg" class="root-bg"></div>
        <!-- <SwitchAnimation v-if="showSwitchAnimation" :type="animationType" @finish="switchFinish"></SwitchAnimation> -->
    </Teleport>
</template>

<style scoped>
.root-bg {
    background-image: url('./assets/bg.webp');
    background-image: url('http://s6j45h2me.hb-bkt.clouddn.com/home/bg.webp?e=1704792000&token=sGnbI2SQOA1_S3LF60KUPQ896EefQ4-7hfofGNLn:SvsVplEHlKB6743BVV2_h3Ejs64=');
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
</style>
