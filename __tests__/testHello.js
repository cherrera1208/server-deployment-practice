'use strict';

const supertest = require('supertest');
const app = require('../server.js');
const request = supertest(app);

describe('testing our HTTP server', () => {
  test('should return an object with a name property, on GET to /hello', async () => {
    let response = await request.get('/hello');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('CARLOS');
  });

  test('should return an object with a name property, on GET to /params/name:', async () => {
    let response = await request.get('/params/Carlos');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Carlos');
  });

  test('should return an object with a name property and role property, on GET to /query?name=carlos&role=student', async () => {
    let response = await request.get('/query?name=carlos&role=student');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('carlos');
    expect(response.body.role).toEqual('student');
  });
});
