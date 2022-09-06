import request from '@/utils/request'

/**
 * 功能
 */

export const feature = () => {
  return request({
    url: '/user/feature'
  })
}
/**
 * 章节
 * @returns axios
 */
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}
