const constants = require('./utils/constants')
const storage = require('./utils/storage')

function data(method, query) {
  let res = null
  switch (method) {
    case 'GET': {
      const { list } = JSON.parse(storage.getItem(constants.PERMISSION_LIST))
      res = {
        success: true,
        code: 200,
        data: list,
        message: 'success'
      }
      break
    }

    default:
      res = null
  }
  return res
}

module.exports = data
