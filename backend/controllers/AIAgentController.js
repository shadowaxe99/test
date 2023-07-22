```javascript
const AIAgent = require('../models/AIAgent');

// Controller for handling AI agent operations
const AIAgentController = {
  // Get all AI agents
  getAllAIAgents: async (req, res) => {
    try {
      const agents = await AIAgent.find();
      res.status(200).json(agents);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get AI agent by ID
  getAIAgentById: async (req, res) => {
    const { id } = req.params;
    try {
      const agent = await AIAgent.findById(id);
      if (!agent) {
        return res.status(404).json({ error: 'AI agent not found' });
      }
      res.status(200).json(agent);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create a new AI agent
  createAIAgent: async (req, res) => {
    const { name, attributes, skills } = req.body;
    try {
      const agent = await AIAgent.create({ name, attributes, skills });
      res.status(201).json(agent);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update AI agent by ID
  updateAIAgentById: async (req, res) => {
    const { id } = req.params;
    const { name, attributes, skills } = req.body;
    try {
      const agent = await AIAgent.findByIdAndUpdate(
        id,
        { name, attributes, skills },
        { new: true }
      );
      if (!agent) {
        return res.status(404).json({ error: 'AI agent not found' });
      }
      res.status(200).json(agent);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Delete AI agent by ID
  deleteAIAgentById: async (req, res) => {
    const { id } = req.params;
    try {
      const agent = await AIAgent.findByIdAndDelete(id);
      if (!agent) {
        return res.status(404).json({ error: 'AI agent not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = AIAgentController;
```
