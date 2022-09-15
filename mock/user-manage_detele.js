const constants = require('./utils/constants')
const storage = require('./utils/storage')

function deleteMetadata(pathId) {
  const manageListData = JSON.parse(storage.getItem(constants.USER_MANAGE_LIST))
  manageListData.list = manageListData.list.filter(
    (item) => item._id !== pathId
  )
  storage.setItem(constants.USER_MANAGE_LIST, manageListData)
}
function data(method, query) {
  let res = null
  switch (method) {
    case 'GET': {
      deleteMetadata(query.pathId)
      res = { success: true, code: 200, data: null, message: '用户删除成功' }
      break
    }

    default:
      res = null
  }
  return res
}

module.exports = data
