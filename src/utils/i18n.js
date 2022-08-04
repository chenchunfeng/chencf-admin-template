import i18n from '@/i18n'

// 通过route定义的name获取sidebar title
export function generateRouteTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
