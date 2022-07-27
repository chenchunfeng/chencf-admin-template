import variables from '@/styles/variables.scss'

export default {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: () => variables,
  sidebarOpened: (state) => state.app.sidebarOpened
}
