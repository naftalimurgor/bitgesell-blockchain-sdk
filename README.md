# Bitgesell Blockchain SDK
<img src="doc/Icon.png" style="height: 60px;"/>

A comprehensive library for interacting Bitgesell API on Web, Nodejs and other JavaScript runtimes through the Bitgesell API

For a full documentation, see the docs: 

## Getting started

Install via yarn/npm:
```sh
yarn add bitgesell-blockchain-sdk # npm i bitgesell-blockchain-sdk 
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
    const txHash = 'e56d609044b4839d840ef4db4ac0534306cc11b257b8b4a71e8fb7491aaca9a9'
    const transaction = await bitgesellBlockchainSDK.tx.getTransactionByHash(txHash)
    console.log(transaction)
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

## Development
1. Fork repo
2. Checkout a feature branch
3. Setup environment:
```sh
cd bitgesell-blockchain-sdk/
npm install
```
4. Run unit tests:
```sh
cd bitgesell-blockchain-sdk/
npm test
```
NB: Remember to add tests to keep the coverage as reasonable as possible.

## Documentation
For complete documenation on how to use this library see the complete [docs](https://naftalimurgor.github.io/bitgesell-blockchain-sdk/)

Try out in this [codepen](https://codepen.io/slax425/pen/PoVdYGm)

## Support
Any form of support is highly welcome through contributions, pull requests and feature requests.

```License```: MIT