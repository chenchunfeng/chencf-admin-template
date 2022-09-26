const constants = require('./utils/constants')
const storage = require('./utils/storage')

function getRolePermission(roleId) {
  const permissionData = JSON.parse(
    storage.getItem(constants.ROLE_RELATION_PERMISSION)
  )
  return permissionData[roleId]
}
function data(method, query) {
  let res = null
  switch (method) {
    case 'GET': {
      const data = getRolePermission(query.pathId)
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
