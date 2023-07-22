backend/utils/web3.js:
```javascript
const Web3 = require('web3');

// Initialize Web3 provider
const web3Provider = new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER_URL);

// Create Web3 instance
const web3 = new Web3(web3Provider);

module.exports = web3;
```