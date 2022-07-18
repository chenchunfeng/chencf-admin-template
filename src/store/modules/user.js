import { login, getUserInfo, logout } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constants'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    // 刷新后重新获取
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    login(context, data) {
      const { username, password } = data
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((res) => {
            // 保存token
            this.commit('user/setToken', res.token)
            // 保存登录时间
            setTimeStamp()
            resolve(res)
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    async getUserInfo({ commit }) {
      const info = await getUserInfo()
      commit('setUserInfo', info)
      return info
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout()
          .then((res) => {
            // 清空token 也可以this.commit('user/setToken')
            commit('setToken', '')
            // 清空用户信息
            commit('setUserInfo', {})
            // 清空localStorage缓存
            removeAllItem()
            // 跳转登录页
            router.push('login')
            resolve(res)
          })
          .catch((e) => {
            reject(e)
          })
      })
    }
  }
}
