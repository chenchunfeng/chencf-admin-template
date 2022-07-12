import router from './router'
import store from './store'

const whiteList = ['/login', '/404']

/**
 * 路由全局前置守卫
 */
router.beforeEach((to, from, next) => {
  // 存在 token ，进入主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
      return
    }
  } else {
    // 没有token的话，跳转login, 排除白名单页面
    if (to.path !== '/login' && !whiteList.includes(to.path)) {
      next('/login')
      return
    }
  }
  next()
})
