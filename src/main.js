import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installIcons from '@/icons'
import installFilter from '@/filters'
import i18n from '@/i18n'
import installDirective from '@/directives'

// 导入全局样式
import './styles/index.scss'
// 导入权限控制模块
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
installDirective(app)

app.use(store).use(router).use(i18n).mount('#app')
