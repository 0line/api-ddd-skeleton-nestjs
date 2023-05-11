import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RegisterModule } from '../../../../src/register/infraestructure/register.module';
import assert = require('assert');

describe('check not exist user', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RegisterModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('register user', async ():Promise<void> => {
    await request(app.getHttpServer())
      .post('/register')
      .send(
        {
            "email": "mail@mail.com",
            "password": "12345"
        })
      .expect(201)
      .then(response => {
         assert(response.body, '')
      });
  });
});
