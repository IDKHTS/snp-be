const Controller = require('egg').Controller

function toInt (str) {
  if (typeof str === 'number') return str
  if (!str) return str
  return parseInt(str, 10) || 0
}

class UserController extends Controller {
  /**
  * @api {get} /use?id get suser by id
  * @apiGroup User
  * @apiParam {Number} id Users unique ID.
  */
  async index () {
    const ctx = this.ctx
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    }
    this.logger.info(ctx.query.id)
    if (ctx.query.id) {
      query.where = { id: toInt(ctx.query.id) }
    }
    // this.logger.debug(ctx)
    ctx.body = await ctx.model.User.findAll(query)
  }

  async show () {
    const ctx = this.ctx
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id))
  }

  /**
  * @api {post} /user create users
  * @apiGroup User
  * @apiBody {String} email  email of the User
  * @apiBody {String} [password]   password of the User
  * @apiBody {String} [name]   name of the User
  */
  async create () {
    const ctx = this.ctx
    const { name, email, password } = ctx.request.body
    const user = await ctx.model.User.create({ name, email, password })
    ctx.status = 201
    ctx.body = user
  }

  /**
  * @api {put} /user/:id update users by ID
  * @apiGroup User
  * @apiBody {String} email  email of the User
  * @apiBody {String} [password]   password of the User
  * @apiBody {String} [name]   name of the User
  */
  async update () {
    const ctx = this.ctx
    const id = toInt(ctx.params.id)
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.status = 404
      return
    }

    const { name, age, email, password } = ctx.request.body
    await user.update({ name, age, email, password })
    ctx.body = user
  }

  /**
  * @api {delete} /user/:id delete users by id
  * @apiGroup User
  * @apiParam {Number} id Users unique ID.
  */
  async destroy () {
    const ctx = this.ctx
    const id = toInt(ctx.params.id)
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.status = 404
      return
    }

    await user.destroy()
    ctx.status = 200
  }
}

module.exports = UserController
