const whiteList = ['/login', '/404', '/401', '/import']

/**
 * 判断路由是否需要保存到tags
 * @param {*} route
 */
export const isTags = (route) => {
  return !whiteList.includes(route.path)
}
