<script setup lang="ts">
import { ref, watch } from 'vue';
import Header from './components/Header.vue';
import { useRouter } from 'vue-router';

let showRootBg = ref(false)
let router = useRouter()


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
