const Service = require('egg').Service
const jsonwebtoken = require('jsonwebtoken')

class JwtService extends Service {
  constructor (ctx) {
    super(ctx)

    this.sign = jsonwebtoken.sign
    this.vertify = jsonwebtoken.vertify
    this.decode = jsonwebtoken.decode
    this.JsonWebTokenError = jsonwebtoken.JsonWebTokenError
    this.NotBeforeError = jsonwebtoken.NotBeforeError
    this.TokenExpiredError = jsonwebtoken.TokenExpiredError
  }

  getTokenFromHeader (headers) {
    if (!headers.authorization) {
      return false
    }
    const [scheme, token] = headers.authorization.split(' ')
    if (scheme !== 'Bearer' || !token) {
      return false
    }
    return token
  }

  generateTokens () {
    const accessToken = this.sign({
      userID: '6666'
    }, this.config.jwt.secret, { expiresIn: '3m' })

    const refreshToken = this.sign({
      userID: '6666',
      accessToken: accessToken.split('.')[2]
    }, this.config.jwt.secret, {
      expiresIn: '1d'
    })

    // this.canRefresh(accessToken, refreshToken)
    // this.a(accessToken)
    return { accessToken, refreshToken }
  }

  canRefresh (accessToken, refreshToken) {
    const payload = this.decode(refreshToken)
    return payload.accessTokenID === accessToken.split('.')[2]
  }
}

module.exports = JwtService
// class JwtService extends Service {
//   generateToken () {
//     const accessToken = this.app.jwt.sign({
//       userID: '6666'
//     }, this.config.jwt.secret, { expiresIn: '3m' })

//     const refreshToken = this.app.jwt.sign({
//       userID: '6666',
//       accessToken: accessToken.split('.')[2]
//     }, this.config.jwt.secret, {
//       expiresIn: '1d'
//     })

//     this.canRefresh(accessToken, refreshToken)
//     this.a(accessToken)
//     return { accessToken, refreshToken }
//   }

//   vertify () {

//   }

//   a (token) {
//     try {
//       const decoded = this.app.jwt.verify(token, this.config.jwt.token)
//       this.logger.debug(decoded)
//     } catch (err) {
//       this.logger.debug('err.............')
//       this.logger.debug(err)
//       // err
//     }
//   }

//   canRefresh (accessToken, refreshToken) {
//     const payload = this.app.jwt.decode(refreshToken)
//     return payload.accessTokenID === accessToken.split('.')[2]
//   }
// }

// module.exports = JwtService
