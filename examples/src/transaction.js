
const { BitgesellBlockchainSDK } = require('bitgesell-blockchain-sdk')


const main = async () => {
    const SDKconfig = {
        baseAPIURL: 'https://api.bitaps.com/bgl/v1/blockchain',
        logger: console.log // optional
    }
    const bitgesellBlockchainSDK = new BitgesellBlockchainSDK(SDKconfig)
    try {
        // fetch a tx based on a txHash
        const tx = await bitgesellBlockchainSDK.tx.getTransactionByHash('e56d609044b4839d840ef4db4ac0534306cc11b257b8b4a71e8fb7491aaca9a9')
        console.log(tx)
    } catch (err) {
        console.log(err)
    }
}

main().catch(err => console.log)