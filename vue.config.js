const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
module.exports = {
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址  这里不用写 api
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true, // 是否跨域
        bypass: function (req, res, options) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html'
          } else if (process.env.MOCK === 'yes') {
            if (!req.path || !req.path.includes('/api')) return
            try {
              // 路由最后一段有可能是id
              const reqPathArr = req.path.split('/api/')[1].split('/')
              const lastPath = reqPathArr[reqPathArr.length - 1]
              // id的规则，每个项目可能都不一样，要具体修复
              if (
                /[0-9]+/.test(lastPath) ||
                (/[0-9]+/.test(lastPath) && /[a-z]+/.test(lastPath))
              ) {
                req.query.pathId = reqPathArr.pop()
              }
              const name = reqPathArr.join('_')
              const mock = require(`./mock/${name}`)

              console.log(name, req.method)
              if (req.method.toUpperCase() === 'POST') {
                let data = ''

                req
                  .on('data', function (chunck) {
                    data += chunck
                  })
                  .on('end', function () {
                    const result = mock(
                      req.method,
                      JSON.parse(data.toString()),
                      req.query
                    )
                    delete require.cache[require.resolve(`./mock/${name}`)]
                    console.log('result', result)
                    res.send(result)
                  })
                return
              } else {
                const result = mock(req.method, req.query)
                delete require.cache[require.resolve(`./mock/${name}`)]
                return res.send(result)
              }
            } catch (e) {
              console.log('mock', e)
            }
          }
        }
      }
    },
    port: '8082'
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    // config 为 webpack 配置对象
    // config.module 表示创建一个具名规则，以后用来修改规则
    config.module
      // 规则
      .rule('svg')
      // 忽略
      .exclude.add(resolve('src/icons'))
      // 结束
      .end()
    // config.module 表示创建一个具名规则，以后用来修改规则
    config.module
      // 规则
      .rule('icons')
      // 正则，解析 .svg 格式文件
      .test(/\.svg$/)
      // 解析的文件
      .include.add(resolve('src/icons'))
      // 结束
      .end()
      // 新增了一个解析的loader
      .use('svg-sprite-loader')
      // 具体的loader
      .loader('svg-sprite-loader')
      // loader 的配置
      .options({
        symbolId: 'icon-[name]'
      })
      // 结束
      .end()
  }
}
