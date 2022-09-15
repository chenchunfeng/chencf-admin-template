const constants = require('./utils/constants')
const storage = require('./utils/storage')

function data(method) {
  let res = null
  switch (method) {
    case 'GET': {
      const { list } = JSON.parse(storage.getItem(constants.USER_MANAGE_LIST))
      res = {
        success: true,
        code: 200,
        data: {
          list,
          total: list.length,
          page: '1',
          size: '2'
        },
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
