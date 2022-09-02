import { MAIN_COLOR } from '@/constants'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'

export default {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  sidebarOpened: (state) => state.app.sidebarOpened,
  // 国际化语言
  language: (state) => state.app.language,
  // 主题色
  mainColor: (state) => state.theme.mainColor,
  // 标签列表
  tagsViewList: (state) => state.app.tagsViewList
}
