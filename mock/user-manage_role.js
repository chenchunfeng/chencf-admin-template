const constants = require('./utils/constants')
const storage = require('./utils/storage')

function getUserRoleById(pathId) {
  const manageListData = JSON.parse(storage.getItem(constants.USER_MANAGE_LIST))
  const userInfo = manageListData.list.find((item) => item._id === pathId)
  return {
    role: userInfo.role,
    _id: userInfo._id
  }
}
function data(method, query) {
  let res = null
  switch (method) {
    case 'GET': {
      const data = getUserRoleById(query.pathId)
      res = {
        success: true,
        code: 200,
        data,
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
