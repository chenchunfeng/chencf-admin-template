function data(method) {
  let res = null
  switch (method) {
    case 'GET': {
      res = {
        success: true,
        code: 200,
        data: {
          role: [
            { id: '6', title: '员工' },
            { id: '5', title: '保安队长' },
            { id: '4', title: '销售经理' }
          ],
          remark: ['测试账号'],
          experience: [
            {
              startTime: '1538323200000',
              endTime: '1551369600000',
              title: '京东',
              desc: '混合开发京东商城'
            },
            {
              startTime: '1614528000000',
              endTime: '1625068800000',
              title: '京东',
              desc: 'uni-app 开发企业级小程序'
            }
          ],
          _id: '632232c04f5c35403ca67d94',
          id: '612710a9ec87aa543c9c3422',
          username: 'test',
          title: '员工',
          openTime: '1633017600000',
          mobile: '188xxxx0003',
          avatar: 'https://res.lgdsunday.club/zhang-san.jpg',
          gender: '男',
          nationality: '汉',
          address: '北京市朝阳区xx大道 11xx2 号 8 层',
          major: '测试权限账号',
          glory: '经常和李四一起出现'
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
