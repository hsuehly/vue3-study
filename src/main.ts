import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  {key, store} from './store'

  const app =createApp(App)
  // 不分模块加key
  // app.use(store, key)
  // 分模块使用当前
  app.config.globalProperties.x = "hsueh"
  app.use(store)
  app.use(router)
  app.mount('#app')
