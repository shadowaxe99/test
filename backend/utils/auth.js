const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/auth');

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, secretKey, options);
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};