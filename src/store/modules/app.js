import { setItem, getItem } from '@/utils/storage'
import { LANG, TAGS_VIEW } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh',
    tagsViewList: getItem(TAGS_VIEW) || []
  }),
  mutations: {
    /**
     * 切换侧边菜单框显示或隐藏
     * @param {*} state
     */
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    /**
     * 设置国际化
     */
    setLanguage(state, lang) {
      state.language = lang
      setItem(LANG, lang)
    },
    /**
     * 添加标签
     * @param {*} state
     * @param {*} tags
     */
    addTagsView(state, tags) {
      // 已存在的不需要添加
      const isFind = state.tagsViewList.find(
        (item) => item.fullPath === tags.fullPath
      )
      if (!isFind) state.tagsViewList.push(tags)
      setItem(TAGS_VIEW, state.tagsViewList)
    },
    /**
     * 替换标签，主要用到多语言切换，更换title
     * @param {*} state
     * @param {*} tagsViewList 需要替换的值
     */
    replaceTagsViews(state, tagsViewList) {
      state.tagsViewList = tagsViewList
      setItem(TAGS_VIEW, tagsViewList)
    },
    /**
     *
     * @param {*} state
     * @param {*} type {'index' | 'other' | 'right'} 关闭当前 | 其它 | 右侧
     * @param {*} index  tagsViewList 下标
     */
    removeTagsView(state, payload) {
      const { type, index } = payload
      if (type === 'index') {
        state.tagsViewList.splice(index, 1)
        setItem(TAGS_VIEW, state.tagsViewList)
      } else if (type === 'other') {
        const current = state.tagsViewList.slice(index, index + 1)
        state.tagsViewList = current
      } else if (type === 'right') {
        state.tagsViewList.splice(index + 1)
      }

      setItem(TAGS_VIEW, state.tagsViewList)
    }
  },
  actions: {}
}
