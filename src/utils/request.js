import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  timeout: 5000, // 5秒超时
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    icode: '958bcd8034842ef430ae5d0ed38402cb' // 课程专用-- 无效，需要自己mock数据
  }
})

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.resolve(new Error(message))
    }
  },
  (err) => {
    ElMessage.error(err.message)
    return Promise.resolve(new Error(err))
  }
)

export default service
