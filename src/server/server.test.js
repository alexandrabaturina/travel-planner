const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)

it('Response from test endpoint', async (done) => {
    const response = await request.get('/test')

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('test passed!')
    done()
})