<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
    <Header></Header>
    <RouterView></RouterView>
    <Teleport to="body">
        <div class="root-bg"></div>
    </Teleport>
</template>

<style scoped>
.root-bg {
    background-image: url('./assets/bg.jpg');
    position: fixed;
    height: 1000vh;
    width: 100vw;
    top: 0;
    background-size: contain;
    z-index: -1;
}
</style>
