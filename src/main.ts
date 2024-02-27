import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useStore } from './stores/common'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
router.beforeEach(()=> {
    const commonStore = useStore()
    commonStore.switchType = 'leave'
})


// blog
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs  from 'highlight.js'

VMdPreview.use(githubTheme, {
    Hljs: hljs
})
app.use(VMdPreview)



app.mount('#app')
