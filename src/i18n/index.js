import { createI18n } from 'vue-i18n'
import LangZh from './lang/zh'
import LangEn from './lang/en'
import store from '@/store'

const messages = {
  zh: { msg: { ...LangZh } },
  en: { msg: { ...LangEn } }
}

function getLanguage() {
  return store?.getters?.language
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})
export default i18n
