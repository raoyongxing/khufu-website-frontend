<!-- 路由切换动画 -->
<script setup lang="ts">
    import { ref, onMounted, onUnmounted, Ref, computed } from 'vue';

    interface ShuffleSpan {
        active: boolean,
        key: number
    }

    const props = defineProps({
        type: String,
    })

    const classNames = computed(()=> {
        return {
            animate: 'animate-' + props.type,
            active: 'active-' + props.type
        }
    })

    let shuffle = ref([] as number[])
    let shuffleAnimationTimer: Ref<number>
    let domList: Ref<ShuffleSpan[]>
    let orderCount:number


    function createShuffle (len:number) {
        let arr = new Array(len);
        for(let i = 0; i < len; i++) {
            arr[i] = i
        }
        let newArr:number[] = []
        for(let i = len; i > 0; i--) {
            let _i = Math.floor(Math.random() * i)
            newArr.push(arr[_i])
            arr.splice(i, 1)
        }
        return newArr
    }

    function shuffleAnimation () {
        orderCount++
        if (orderCount > shuffle.value.length) return
        let _i = shuffle.value[orderCount]
        domList.value[_i].active = true
    }

    onMounted(() => {
        shuffle.value = createShuffle(16)
        domList = ref(shuffle.value.map(item=> {
            return {
                active: false,
                key: item
            }
        }))
        orderCount = -1
        shuffleAnimationTimer = ref(setInterval(shuffleAnimation, 17))
    })

    onUnmounted(() => {
        clearInterval(shuffleAnimationTimer.value)
    })

</script>
<template>
    <div :class="classNames.animate">
        <span v-for="(_span, key) in domList" :key="key" :class="_span.active ? classNames.active : ''"></span>
    </div>
</template>