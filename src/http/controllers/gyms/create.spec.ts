import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const response = await request(app.server)
      .post('/gyms')
      .send({
        title: 'JavaScript Gym',
        description: 'Some description',
        phone: '199999999',
        latitude: -27.5944702,
        longitude: -48.5893463,
      })
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toEqual(201)
  })
})
