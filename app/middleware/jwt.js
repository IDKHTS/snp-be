
module.exports = (options, app) => async function (ctx, next) {
  const jwt = ctx.service.jwt

  const token = jwt.getTokenFromHeader(ctx.headers)

  // widthout authorization header or invalid
  if (!token) return await next()

  ctx.token = token
  app.logger.debug('1111')

  await next()
}
