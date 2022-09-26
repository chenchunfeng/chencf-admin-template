const constants = require('./utils/constants')
const storage = require('./utils/storage')

function setUserRolesById(userId, roles) {
  const manageListData = JSON.parse(storage.getItem(constants.USER_MANAGE_LIST))
  const userInfo = manageListData.list.find((item) => {
    if (item._id === userId) {
      item.role = roles
      return item
    }
  })
  if (userInfo.username.includes('admin')) {
    return false
  } else {
    storage.setItem(constants.USER_MANAGE_LIST, manageListData)
    return true
  }
}
function data(method, data, query) {
  let res = null
  switch (method) {
    case 'POST': {
      const flag = setUserRolesById(query.pathId, data.roles)
      if (flag) {
        res = {
          success: true,
          code: 200,
          data: null,
          message: 'success'
        }
      } else {
        res = {
          success: false,
          code: 200,
          data: null,
          message: '【超级管理员、管理员】角色不可修改'
        }
      }

      break
    }

    default:
      res = null
  }
  return res
}

module.exports = data
