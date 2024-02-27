<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

interface Grid {
    content: string,  // 文字内容
    key: number,      // 
    span: number,    // 占据几个格子
    startCol: number,
    endCol: number,
    isLoaded: boolean
}

const ROW_SPAN: number = 3
const GRID_NUM: number = 30
const RANGE_MAX: number = 100
const RANGE_1_PERCENTAGE = 60
const RANGE_2_PERCENTAGE = 80


let hasSpan: number = 0

const data: Array<Grid> = new Array(GRID_NUM).fill('').map((_row, index) => {
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
        content: '春光不予来时，<br> 慷慨自己 ,<br>末了一句知。',
        key: index,
        span: span,
        startCol: hasSpan - span + 1,
        endCol: hasSpan + 1,
        isLoaded: false
    }
    if (hasSpan == ROW_SPAN) hasSpan = 0
    return row
})

//   下面为响应式交互式操作

const grids = ref(data)

onMounted(() => {
    const curInstance = getCurrentInstance();
    let contentGridRefs = curInstance?.refs.contentGridRefs
    let contentGridElements: Array<Element> = []
    if (Array.isArray(contentGridRefs)) {
        contentGridElements = contentGridRefs
    } else if (contentGridRefs) {
        contentGridElements = [contentGridRefs] as Array<Element>
    } else {
        contentGridElements = []
    }
    const intersectionObserver = new IntersectionObserver((entries) => { 
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('kf-is-inserted')) {
                let target = entry.target as HTMLElement
                let gridKey = target.dataset.gridKey as unknown as number
                let index = grids.value.findIndex(item => item.key == gridKey)
                grids.value[index].isLoaded = true
                intersectionObserver.unobserve(entry.target)
            }
        })
    })
    contentGridElements.forEach(el => {
        intersectionObserver.observe(el)
    })
})

</script>
<template>
    <article>
        <div class="relative max-w-7xl overflow-hidden mx-auto p-4">
            <div class="grid grid-cols-3">
                <div v-for="item in grids" ref="contentGridRefs" :data-grid-key="item.key" :key="item.key"
                    :style="{ 'grid-column-start': item.startCol, 'grid-column-end': item.endCol }"
                    class="h-80 w-full p-2 rounded"
                    :class="[`kf-insert-${['left', 'right'][Math.floor(Math.random() * 2)]}`, item.isLoaded ? 'kf-is-inserted' : '']">
                    <div class="bg-purple-100 bg-opacity-25 w-full h-full p-3 col">
                        <div v-html="item.content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<style>
.kf-insert-bottom {
    opacity: 0;
    filter: blur(5px);
    transition: all .3s;
    transform: translateY(20rem);
}

.kf-insert-left {
    opacity: 0;
    filter: blur(5px);
    transition: all .2s;
    transform: translateX(-100%);
}

.kf-insert-right {
    opacity: 0;
    filter: blur(5px);
    transition: all .3s;
    transform: translateX(100%);
}

.kf-is-inserted {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transform: translateX(0);
}
</style>