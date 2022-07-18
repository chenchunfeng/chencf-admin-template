function data(method) {
  let res = null
  switch (method) {
    case 'GET':
      res = {
        success: true,
        code: 200,
        data: {},
        message: '登出成功'
      }
      break
    default:
      res = null
  }
  return res
}

module.exports = data
