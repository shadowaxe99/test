const request = require('supertest');
const app = require('../server');

describe('Backend API Tests', () => {
  it('should return a 200 status code for GET /api/agents', async () => {
    const response = await request(app).get('/api/agents');
    expect(response.statusCode).toBe(200);
  });

  it('should return a 404 status code for GET /api/agents/:id', async () => {
    const response = await request(app).get('/api/agents/123');
    expect(response.statusCode).toBe(404);
  });

  it('should return a 201 status code for POST /api/agents', async () => {
    const agent = {
      name: 'AI Agent 1',
      attributes: {
        intelligence: 80,
        creativity: 70,
        adaptability: 90,
      },
    };

    const response = await request(app).post('/api/agents').send(agent);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should return a 200 status code for PUT /api/agents/:id', async () => {
    const agent = {
      name: 'Updated AI Agent',
      attributes: {
        intelligence: 90,
        creativity: 80,
        adaptability: 95,
      },
    };

    const createResponse = await request(app).post('/api/agents').send(agent);
    const agentId = createResponse.body.id;

    const updateResponse = await request(app)
      .put(`/api/agents/${agentId}`)
      .send(agent);
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.body).toHaveProperty('id', agentId);
    expect(updateResponse.body).toHaveProperty('name', agent.name);
    expect(updateResponse.body.attributes).toEqual(agent.attributes);
  });

  it('should return a 204 status code for DELETE /api/agents/:id', async () => {
    const agent = {
      name: 'AI Agent to be deleted',
      attributes: {
        intelligence: 70,
        creativity: 60,
        adaptability: 80,
      },
    };

    const createResponse = await request(app).post('/api/agents').send(agent);
    const agentId = createResponse.body.id;

    const deleteResponse = await request(app).delete(`/api/agents/${agentId}`);
    expect(deleteResponse.statusCode).toBe(204);

    const getResponse = await request(app).get(`/api/agents/${agentId}`);
    expect(getResponse.statusCode).toBe(404);
  });
});
