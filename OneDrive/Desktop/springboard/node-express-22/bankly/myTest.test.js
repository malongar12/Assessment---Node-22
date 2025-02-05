const request = require('supertest');
const express = require('express');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require("./config")
const {authUser} = require("./middleware/auth")

const app = express();


app.use(express.json());

app.get('/test', authUser, (req, res) => {
  return res.status(200).json({ message: 'Authenticated', user: req.username, admin: req.admin });
});

const generateToken = (username, admin = false) => {
  return jwt.sign({ username, admin }, SECRET_KEY, { expiresIn: '1h' });
};

describe('authUser Middleware', () => {
  it('should pass when a valid token is provided', async () => {
    const token = generateToken('testuser', true);

    const response = await request(app)
      .get('/test')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Authenticated');
    expect(response.body.user).toBe('testuser');
    expect(response.body.admin).toBe(true);
  });

  it('should fail when no token is provided', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('No token provided');
  });

  it('should fail when an invalid token is provided', async () => {
    const invalidToken = 'invalidtoken';

    const response = await request(app)
      .get('/test')
      .set('Authorization', `Bearer ${invalidToken}`);

    expect(response.status).toBe(403);
    expect(response.body.message).toBe('Failed to authenticate token');
  });
});
