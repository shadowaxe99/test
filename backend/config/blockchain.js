backend/config/blockchain.js:

```javascript
const Web3 = require('web3');
const web3 = new Web3();

// Connect to the blockchain
async function connectBlockchain() {
  try {
    await web3.eth.connect();
    console.log('Connected to the blockchain');
  } catch (error) {
    console.error('Failed to connect to the blockchain:', error);
  }
}

module.exports = {
  web3,
  connectBlockchain,
};
```