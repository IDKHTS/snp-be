const { Controller } = require('egg')

class TestJwtController extends Controller {
  async login () {
    const { ctx } = this

    const tokens = ctx.service.jwt.generateTokens()

    // 返回 token 到前端
    ctx.body = tokens
  }

  async check () {
    const { ctx } = this
    this.logger.debug(ctx.body)
    // ctx.service.jwt.a(ctx.headers.tk)
  }
}

module.exports = TestJwtController

//  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjY2IiwiaWF0IjoxNjQ3NTAwMDAzfQ._iZgU3CZC2qE7aI3KdAyYN3lgEGiqSBA51lnrYoqhdY
