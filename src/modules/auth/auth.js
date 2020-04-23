const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { find } = require('../../services/user');
const { compareSync } = require('bcryptjs');

const router = new Router();

router.post('/login', bodyParser(), async ctx => {
  const { login, password } = ctx.request.body;
  const user = await find({ login });
  if (!user || !compareSync(password, user.password)) { 
    const error = new Error();
    error.status = 403;
    throw error;
  }
  ctx.body = {
    // TODO: yarn add jsonwebtoken uuid
  }
});



module.exports = router;
