<script setup lang="ts">
import { ref } from 'vue'

interface Grid {
    content: string,  // 文字内容
    key: number,      // 
    span: number,    // 占据几个格子
    startCol: number, 
    endCol: number
}

const ROW_SPAN:number = 3
const GRID_NUM: number = 30
const RANGE_MAX:number = 100
const RANGE_1_PERCENTAGE = 60
const RANGE_2_PERCENTAGE = 80
// const RANGE_3_PERCENTAGE = 20

let hasSpan:number = 0

const data:Array<Grid> = new Array(GRID_NUM).fill('').map((_row, index)=> {
    let num = Math.floor(Math.random() * RANGE_MAX) + 1
    let span = 1
    if (num >= RANGE_1_PERCENTAGE && num < RANGE_2_PERCENTAGE) {
        span = 2
    } else if (num > RANGE_2_PERCENTAGE) {
        span = 3
    }
    if (hasSpan + span <= ROW_SPAN) {
        hasSpan += span
    } else if (hasSpan + span > ROW_SPAN) {
        span = ROW_SPAN - hasSpan
        hasSpan = ROW_SPAN
    }
    if (index == GRID_NUM - 1 && hasSpan != ROW_SPAN) {
        span += ROW_SPAN - hasSpan
        hasSpan = ROW_SPAN
    }
    let row = {
        content: '我是内容' + index,
        key: index,
        span: span,
        startCol: hasSpan - span + 1,
        endCol: hasSpan + 1,
    }
    if (hasSpan == ROW_SPAN) hasSpan = 0
    return row
})

console.log(data)

const grids = ref(data)

</script>

<template>
    <div class="
        sticky z-40 top-0  h-24
        flex items-center justify-between 
        px-8 border-b font-mono
        pointer-events-none
        bg-white "
    >
        <div class="inline-flex items-center">
            <img class="h-24" src="../../assets/vue.svg" alt="" srcset="">
            <div class="inline-block ml-2">
                <span class="text-3xl text-orange-500">Khufu</span>
                <br>
                <span class="text-purple-300">Daily Log</span>
            </div>
        </div>
        <div class="h-12"></div>
        <div class="h-12">do you know</div>
    </div>
    <article>
        <div class="relative max-w-7xl overflow-hidden mx-auto p-4">
            <div class="grid grid-cols-3">
                <div v-for="item in grids" :key="item.key" :style="{ 'grid-column-start': item.startCol, 'grid-column-end': item.endCol }"  class="h-80 w-full rounded-lg p-2">
                    <div class="bg-purple-100 bg-opacity-25 w-full h-full p-3 col">
                        <div>
                            {{ item.key + 1 }}
                        </div>
                        <div>
                            {{item.content}}
                        </div>
                        <div>
                            {{ item.startCol }} - {{ item.endCol }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>

</style>
