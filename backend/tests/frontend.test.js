const { expect } = require('chai');
const request = require('supertest');
const app = require('../../backend/server');

describe('Frontend Tests', () => {
  it('should return a successful response', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Hello, frontend!');
  });

  // Add more tests as needed
});