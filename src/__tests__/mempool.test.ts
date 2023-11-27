import { BitgesellBlockchainSDK } from "../api"

describe('Mempool tests', () => {
    const sdkConfig = {
        baseAPIURL: 'https://api.bitaps.com/bgl/v1/blockchain',
        logger: console.log
    }

    let bitgesellBlockchainSDK: BitgesellBlockchainSDK
    const bitgesellAddress = 'bgl1qlmzckh904vze03n0lwzptt5dkmvf2vj3ev4qm9'

    beforeAll(() => {
        bitgesellBlockchainSDK = new BitgesellBlockchainSDK(sdkConfig)
    })

    it('should fetch mempool state', async () => {
        const orderBy = 'asc'
        const mempoolState = bitgesellBlockchainSDK.mempool.getMempoolState(1, orderBy)
        expect(mempoolState).toBeDefined()
    })

    it('should get invalid Transactions in the mempool', async () => {
        const limit = 5, orderBy = 'asc', page = 5;
        const invalidMempoolTxs = await bitgesellBlockchainSDK.mempool.getInvalidMempoolTransanctions(limit, orderBy, page)
        expect(invalidMempoolTxs).toHaveProperty('list')
    })

    it('should get double spend Transactions', async () => {
        const doublespendTxes = await bitgesellBlockchainSDK.mempool.getDoubleSpendTransactions()
        expect(doublespendTxes).toHaveProperty('list')
        expect(doublespendTxes).toBeDefined()
    })

    it('should get mempool recommended fee', async () => {
        const page = 1, limit = 1, orderBy = 'asc', fromTimestamp = 0;
        const recommendedFee = await bitgesellBlockchainSDK.mempool.getMempoolRecommendedFee(page, limit, orderBy, fromTimestamp)
        expect(recommendedFee).toHaveProperty('best')
        expect(recommendedFee).toHaveProperty('best4h')
        expect(recommendedFee).toHaveProperty('bestHourly')

    })
})