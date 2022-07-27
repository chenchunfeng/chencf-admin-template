import path from 'path'

/**
 * 返回所有子路由 其实就是拿routes.children 的值
 */
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children.length > 0) {
      // 处理子路由不是/开头的情况
      route.children.forEach((childRoute) => {
        childRoute.path = path.resolve(route.path, childRoute.path)
      })
      result.push(...route.children)
    }
  })
  return result
}

/**
 * 判断数据是否为空值
 */
const isNull = (val) => {
  if (val !== 0 && !val) return true
  if (JSON.stringify(val) === '{}') return true
  if (JSON.stringify(val) === '[]') return true

  return false
}

/**
 * 处理脱离层级的路由：某个一级路由为其他子路由，则剔除该一级路由，保留路由层级
 * @param {*} routes router.getRoutes()
 */
export const filterRouter = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.some((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 根据 routes 数据，返回对应 menu 规则数组
 * @param {*} routes  filterRouter(router.getRoutes())
 * @returns
 */
export const generateMenus = (routes, basePath = '') => {
  const result = []

  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return
    // 没有meta 但有children的也要递归
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }

    const routePath = path.resolve(basePath, item.path)
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      // 有meta 也有children的二级路由
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }

    if (item.children && item.children.length > 0) {
      route.children.push(...generateMenus(item.children, item.path))
    }
  })

  return result
}
