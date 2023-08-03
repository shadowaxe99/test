const express = require('express');
const router = express.Router();

// Import controllers
const AIAgentController = require('../controllers/AIAgentController');
const UserController = require('../controllers/UserController');

// AI Agent routes
router.get('/ai-agents', AIAgentController.getAllAIAgents);
router.get('/ai-agents/:id', AIAgentController.getAIAgentById);
router.post('/ai-agents', AIAgentController.createAIAgent);
router.put('/ai-agents/:id', AIAgentController.updateAIAgentById);
router.delete('/ai-agents/:id', AIAgentController.deleteAIAgentById);

// User routes
router.get('/users/:id', UserController.getUser);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;