import { setItem, getItem } from '@/utils/storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constants'

/**
 * 是否超时
 */
export const isCheckTimeout = () => {
  const currentTime = Date.now()
  // 登录缓存时间戳
  var loginTime = getTimeStamp()
  return currentTime - loginTime > TOKEN_TIMEOUT_VALUE
}
/**
 * 设置时间戳
 */
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now())
}
/**
 * 获取时间戳
 */
export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}
