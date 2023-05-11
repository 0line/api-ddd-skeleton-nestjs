/* import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { HealthyModule } from '../../../src/healthy/infraestructure/healthy.module';

describe('check status server', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HealthyModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('healthy', async ():Promise<void> => {
    await request(app.getHttpServer())
      .get('/healthy')
      .expect(200);
  });
});
 */
import { defineFeature, loadFeature } from 'jest-cucumber';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthyModule } from '../../../src/healthy/infraestructure/healthy.module';
const feature = loadFeature('./test/features/healthy/status.feature');  

defineFeature(feature, (test) => {
  let _request: request.Test;
  let app:INestApplication;
  let _response: request.Response;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HealthyModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test("Check the api status", ({ given, then }) => {
    //"I send a GET request to {string}"

      given(/^I send a GET request to "(.*)"$/, (url:string) => {
        _request = request(app.getHttpServer()).get(url);
      });

      then(/^the response status code should be (\d+)$/, async (status : number) => {
        _response = await _request;
        await expect(_response.statusCode.toString()).toEqual(status);
      });
  });
});