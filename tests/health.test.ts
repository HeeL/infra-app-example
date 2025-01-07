import { expect } from '@jest/globals';
import request from 'supertest';
import { createServer } from '../src/server';

describe('Health Check Endpoint', () => {
  it('should return 200 for health check', async () => {
    const server = createServer();
    const response = await request(server).get('/health');

    expect(response.status).toBe(200);
  });
});
