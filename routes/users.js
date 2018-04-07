const router = require('koa-router')()
const User = require('../db_model/users')
const jwt = require('jsonwebtoken')
const config = require('../services/config')

router.prefix('/users')

//用户注册
router.post('/regist', async (ctx, next) => {
  const querystring = ctx.querystring
  return User.create(ctx.request.querystring).then(result => {
    console.log(result);
  });
});

//用户查询
router.get('/getUser/:id', async (ctx, next) => {
  return await User.findOne({ where: { id: ctx.params.id } }).then(user => {
    console.log(JSON.stringify(user));
    if (user) {
      ctx.body = JSON.stringify(user);
    } else {
      ctx.body = 'fail';
    }
  });
  next();
});

//用户登陆
router.post('/loginUser', async (ctx, next) => {
  console.log(ctx.request.body);
  return User.findOne({ where: { username: ctx.request.body.username, password: ctx.request.body.password } })
    .then(user => {
      if (user) {
        //返回 token
        let userToken = {
          name: user.username
        };
        const token = jwt.sign(userToken, config.jwt_secret, { expiresIn: '10s' });
        ctx.body = token;
      } else {
        ctx.body = 'login fail';
      }
    });
});


module.exports = router
