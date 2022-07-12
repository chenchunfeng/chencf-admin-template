function data(method) {
  let res = null
  switch (method) {
    case 'POST':
      res = {
        success: true,
        code: 200,
        data: { token: 'afea405c-9ff0-4b32-9fcd-3cad593586f5' },
        message: '登录成功'
      }
      break
    default:
      res = null
  }
  return res
}

module.exports = data
