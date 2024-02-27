<template>
    <main>
        <div class=" flex justify-between">
            <div class=" w-60 mr-3 h-full border-r-2 fixed">
                <ul>
                    <li v-for="doc in docsList" :key="doc.name" class="py-2 px-6">
                        <a @click.prevent="showCur(doc.path)">{{ doc.title }}</a>
                    </li>
                </ul>
            </div>
            <div class=" flex-auto ml-64">
                <!-- <div class="flex justify-between p-4 text-sm">
                    <span>
                        last:<a href=""></a>
                    </span>
                    <span>
                        next:<a href=""></a>
                    </span>
                </div> -->
                <div class="p-4 text-xl">{{ title }}</div>
                <hr>
                <v-md-preview :text="text"></v-md-preview>
            </div>
        </div>
    </main>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import docs from './docs.json'
const modules = import.meta.glob('../../docs/**/**.md', { as: 'raw' })

const docsList = ref(docs)


let text = ref('')
let title = ref('')


const showCur = async (curPath:string)=> {
    for(let config of docsList.value) {
        if (config.path === curPath) {
            title.value = config.title
        }
    }
    for(let path in modules) {
        if (path.includes(curPath)) {
            text.value = await modules[path]()
        }
    }
}

onMounted(()=> {
    showCur(docs[0].path)
})

</script>