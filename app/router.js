
module.exports = (app) => {
  const { router, controller } = app
  const { jwt } = app.middleware
  router.get('/', controller.home.index)
  router.resources('user', '/user', controller.user)
  // app.logger.debug(controller)

  router.get('/jwtLogin', controller.testJwt.login)
  router.get('/jwtCheck', jwt, controller.testJwt.check)
}
