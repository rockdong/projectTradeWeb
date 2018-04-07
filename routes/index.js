const router = require('koa-router')()
const config = require('../services/config')
const users = require('./users')
const util = require('util')
const jwt = require('jsonwebtoken')
const verify = util.promisify(jwt.verify) // 解密

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  const token = ctx.header.authorization  // 获取jwt
  console.log('this is token:', token)
  let payload
  if (token) {
    payload = await verify(token.split(' ')[1], config.jwt_secret)  // // 解密，获取payload
    ctx.body = {
      payload
    }
  } else {
    ctx.body = {
      message: 'token 错误',
      code: -1
    }
  }
})

const versionPath = '/api/' + config.version

router.use('/api/v1', users.routes(), users.allowedMethods())

module.exports = router
