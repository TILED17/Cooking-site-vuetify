/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import slidermain from './components/slider-main.vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.css'


// Composables
import { createApp } from 'vue'

const app = createApp(App)
.use(router)
registerPlugins(app)
app.mount('#app')
