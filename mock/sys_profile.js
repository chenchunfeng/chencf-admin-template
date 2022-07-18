function data(method) {
  let res = null
  switch (method) {
    case 'GET':
      res = {
        success: true,
        code: 200,
        data: {
          role: [{ id: '1', title: '超级管理员' }],
          _id: '62d46a4092eef422c1551ace',
          id: '612710a9ec87aa543c9c3420',
          username: 'super-admin',
          title: '超级管理员',
          avatar:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20161228%2F0e33d3e10c2d47c18ea99f9bef02fb19_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660700436&t=7c039a67b4fd3cb2b68296d6543480cd',
          permission: {
            menus: [
              'userManage',
              'roleList',
              'permissionList',
              'articleRanking',
              'articleCreate'
            ],
            points: [
              'distributeRole',
              'importUser',
              'removeUser',
              'distributePermission'
            ]
          }
        },
        message: '获取资料成功'
      }
      break
    default:
      res = null
  }
  return res
}

module.exports = data
