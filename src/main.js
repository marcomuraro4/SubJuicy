import * as Vue from 'vue'
import App from './components/App/App.vue'
import * as Tone from 'tone'

const app = Vue.createApp(App)
app.config.globalProperties.$tone = Tone

app.mount('#app')
