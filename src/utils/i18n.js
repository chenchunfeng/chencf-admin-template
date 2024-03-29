import i18n from '@/i18n'
import { watch } from 'vue'
import store from '@/store'

// 通过route定义的name获取sidebar title
export function generateRouteTitle(title) {
  return i18n.global.t('route.' + title)
}

/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb) => cb(store.getters.language))
    }
  )
}
