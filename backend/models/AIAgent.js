```javascript
const mongoose = require('mongoose');

const AIAgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  attributes: {
    type: [String],
    required: true,
  },
  performanceMetrics: {
    type: Object,
    required: true,
  },
  ownershipDetails: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  trainingHistory: {
    type: [String],
    required: true,
  },
  achievements: {
    type: [String],
    required: true,
  },
  trainingDataLink: {
    type: String,
    required: true,
  },
  modelArchitectureLink: {
    type: String,
    required: true,
  },
});

const AIAgent = mongoose.model('AIAgent', AIAgentSchema);

module.exports = AIAgent;
```
