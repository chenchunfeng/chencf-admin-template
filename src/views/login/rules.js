export const validatePassword = () => {
  return (rule, data, callback) => {
    if (data.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
