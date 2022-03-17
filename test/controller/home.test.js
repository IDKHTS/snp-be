const { app, assert } = require('egg-mock/bootstrap')

describe('test/controller/home.test.js', () => {
  describe('GET /', () => {
    it('should status 200 and get the body', () => {
      // send app a `GET /` req
      return app
        .httpRequest()
        .get('/')
        .expect(200) // expect status 200
        .expect('Hello world') // expect body as hello world
    })

    it('should send multi requests', async () => {
      // using generator function as a test case, can make multiple requests in a single use case serially
      await app
        .httpRequest()
        .get('/')
        .expect(200) // expect status 200
        .expect('Hello world') // expect body as hello world

      // request one more time
      const result = await app
        .httpRequest()
        .get('/')
        .expect(200)
        .expect('Hello world')

      // also
      assert(result.status === 200)
    })
  })
})

describe('egg test', () => {
  console.log('order 0, call before all describe before()')
  before(() => console.log('order 1'))
  before(() => console.log('order 2'))
  after(() => console.log('order 6'))
  beforeEach(() => console.log('order 3'))
  afterEach(() => console.log('order 5'))
  it('should worker', () => console.log('order 4'))
})

describe('egg test1', () => {
  console.log('order 00')// not inside the func before will be exec first, not just exec until calling describe
})
