const constants = require('./utils/constants')
const storage = require('./utils/storage')

const roleIdMap = {
  超级管理员: 1,
  管理员: 2,
  人事经理: 3,
  销售经理: 4,
  保安队长: 5,
  员工: 6
}
function addStorage(list) {
  const letter = ['a', 'b', 'c', 'd', 'e']
  list.forEach((item) => {
    const uniId =
      Math.ceil(Math.random() * 100000) +
      100000 +
      letter[Math.floor(Math.random() * 5)]
    item.id = uniId
    item._id = uniId
    item.role = [{ id: roleIdMap[item.role], title: item.role }]
  })
  const manageListData = JSON.parse(storage.getItem(constants.USER_MANAGE_LIST))
  manageListData.list = manageListData.list.concat(list)
  storage.setItem(constants.USER_MANAGE_LIST, manageListData)
}

function data(method, list) {
  let res = null
  switch (method) {
    case 'POST': {
      addStorage(list)
      res = {
        success: true,
        code: 200,
        data: null,
        message: '批量导入员工成功'
      }
      break
    }
    default:
      res = null
  }
  return res
}

module.exports = data
