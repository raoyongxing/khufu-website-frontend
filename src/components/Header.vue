<script lang="ts" setup>

</script>
<template>
        <div class="
        sticky z-40 top-0  h-24
        flex items-center justify-between 
        px-8 border-b font-mono
        bg-white ">
        <RouterLink class="inline-flex items-center w-80" to="/index">
            <img class="h-24" src="../assets/vue.svg" alt="" srcset="">
            <div class="inline-block ml-2">
                <span class="text-3xl text-orange-500">Khufu</span>
                <br>
                <span class="text-purple-300">Daily Log</span>
            </div>
        </RouterLink>
        <nav class="h12  w-full flex justify-end px-4">
            <ul class="inline-flex">
                <li class=" px-4 text-lg text-rose-300 cursor-pointer">
                    <RouterLink to="/about">DREAM</RouterLink>
                </li>
                <li class=" px-4 text-lg text-rose-300 cursor-pointer">
                    <RouterLink to="/about">DAILY</RouterLink>
                </li>
                <li class=" px-4 text-lg text-rose-300 cursor-pointer">
                    <RouterLink to="/about">BLOG</RouterLink>
                </li>
                <li class=" px-4 text-lg text-rose-300 cursor-pointer">
                    <RouterLink to="/about">SHARED</RouterLink>
                </li>
                <li class=" px-4 text-lg text-rose-300 cursor-pointer">
                    <RouterLink to="/contract">CONTRACT</RouterLink>
                </li>
            </ul>
        </nav>
        <div class="h-12">do you know</div>
    </div>
</template>