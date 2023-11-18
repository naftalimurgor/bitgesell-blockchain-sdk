# Bitgesell Blockchain SDK
<img src="doc/Icon.png" style="height: 60px;"/>

A comprehensive library for interacting Bitgesell API on Web, Nodejs and other JavaScript runtimes through the Bitgesell API

For a full documentation, see the docs: 

## Getting started

Install via yarn/npm:
```sh
yarn add bgl-blockchain-sdk # npm i 
```

### Initialization

To initialize the sdk library

```javascript
import {BitgesellBlockchainSDK} from 'bitgesell-blockchain-sdk'

const sdkConfig = {
  baseAPIURL: 'https://api.bitaps.com/bgl/v1/blockchain',
 logger: console.log // optional
}

const bitgesellBlockchainSDK = new BitgesellBlockchainSDK(sdkConfig)
```

To initialize the sdk library in Commonjs pattern:

```javascript
const {BitgesellBlockchainSDK} = require('bitgesell-blockchain-sdk')

const sdkConfig = {
  baseAPIURL: 'https://api.bitaps.com/bgl/v1/blockchain',
 logger: console.log // optional
}

const bitgesellBlockchainSDK = new BitgesellBlockchainSDK(sdkConfig)
```
### Query Transactions
To query transacton by the transaction `hash`:

```javascript
(async() => {
    const txHash = 'a transaction hash'
    const transaction = await bitgesellBlockchainSDK.tx.getTransactionByHash(txHash)
    console.log(txHash)
})()
```
### Query the Mempool
To query mempool state:

```javascript
(async() => {
    const mempoolState = await bitgesellBlockchainSDK.mempool.getMempoolState()
    console.log(mempoolState)
})()
```

### Query Blocks
To query block by the blockHeight:

```javascript
(async() => {
    const block = await bitgesellBlockchainSDK.blockchain.getBlockByHeight(206)
    console.log(block)
})()
```

## Documentation
For complete documenation on how to use this library see the complete docs:

## Support
Any form of support is highly welcome through contributions, pull requests and feature requests.

```License```: MIT