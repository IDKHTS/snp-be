const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    this.ctx.body = 'Hello world'
    this.logger.debug('a ha!')
  }
}

module.exports = HomeController
