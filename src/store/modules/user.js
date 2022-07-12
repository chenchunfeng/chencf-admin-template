import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    // 刷新后重新获取
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
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
            resolve(res)
          })
          .catch((e) => {
            reject(e)
          })
      })
    }
  }
}
