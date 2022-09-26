const constants = require('./utils/constants')
const storage = require('./utils/storage')

function setRolesPermission(roleId, permissions) {
  const listData = JSON.parse(storage.getItem(constants.ROLE_LIST))
  const roleInfo = listData.list.find((item) => {
    if (item.id === roleId) {
      return item
    }
  })
  if (roleInfo.title.includes('管理员')) {
    return false
  } else {
    const data = JSON.parse(storage.getItem(constants.ROLE_RELATION_PERMISSION))
    data[roleId] = permissions
    storage.setItem(constants.ROLE_RELATION_PERMISSION, data)
    return true
  }
}
function data(method, data, query) {
  let res = null
  switch (method) {
    case 'POST': {
      const flag = setRolesPermission(data.roleId, data.permissions)
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
