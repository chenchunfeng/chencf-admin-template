const constants = require('./utils/constants')
const storage = require('./utils/storage')

function data(method, query) {
  let res = null
  switch (method) {
    case 'GET': {
      const { list } = JSON.parse(storage.getItem(constants.USER_MANAGE_LIST))
      const startIndex = +query.page === 1 ? 0 : (query.page - 1) * query.size
      res = {
        success: true,
        code: 200,
        data: {
          list: list.slice(startIndex, +query.size + startIndex),
          total: list.length,
          page: query.page,
          size: query.size
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
