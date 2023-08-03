const request = require('supertest');
const app = require('../server');

describe('Backend API Tests', () => {
  it('should return a 200 status code for GET /api/agents', async () => {
    const response = await request(app).get('/api/agents');
    expect(response.statusCode).toBe(200);
  });

  // Add more tests as needed
});