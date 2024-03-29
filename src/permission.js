import router from './router'
import store from './store'

const whiteList = ['/login', '/404']

/**
 * 路由全局前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
      return
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action，并获取用户当前权限
        const { permission } = await store.dispatch('user/getUserInfo')

        // 处理用户权限，筛选出需要添加的权限
        const filterRoutes = await store.dispatch(
          'permission/filterRoutes',
          permission.menus
        )
        // 利用 addRoute 循环添加
        filterRoutes.forEach((item) => {
          router.addRoute(item)
        })

        // 添加完动态路由之后，需要在进行一次主动跳转
        // return next(to.path)
      }
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
