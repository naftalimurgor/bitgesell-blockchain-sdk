import { BitgesellBlockchainSDK } from "../api"
import { sdkConfig } from "./sdkConfig"
describe('Transaction tests', () => {
    const txHash = 'e56d609044b4839d840ef4db4ac0534306cc11b257b8b4a71e8fb7491aaca9a9'
    let bitgesellBlockchainSDK: BitgesellBlockchainSDK

    beforeAll(() => {
        bitgesellBlockchainSDK = new BitgesellBlockchainSDK(sdkConfig)
    })

    it('should fetch a transaction by Hash', async () => {
        const tx = await bitgesellBlockchainSDK.tx.getTransactionByHash(txHash)
        expect(tx).toBeDefined()
    })
    it('should get transaction merkel proof', async () => {
        const merkelProof = await bitgesellBlockchainSDK.tx.getTransactonMerkleProof(txHash)
        expect(merkelProof).toBeDefined()
        expect(merkelProof).toHaveProperty('merkleProof')
    })
})