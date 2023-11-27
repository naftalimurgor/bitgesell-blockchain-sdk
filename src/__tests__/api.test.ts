import { Address, BitgesellBlockchainSDK, Blockchain, Mempool, Transaction } from "../api"
import { sdkConfig } from "./sdkConfig"

describe('API tests', () => {
    let bitgesellBlockchainSDK: BitgesellBlockchainSDK

    it('should instantiate BitgesellBlockchainSDK correctly', () => {

        bitgesellBlockchainSDK = new BitgesellBlockchainSDK(sdkConfig)
        expect(bitgesellBlockchainSDK.tx).toBeInstanceOf(Transaction)
        expect(bitgesellBlockchainSDK.mempool).toBeInstanceOf(Mempool)
        expect(bitgesellBlockchainSDK.address).toBeInstanceOf(Address)
        expect(bitgesellBlockchainSDK.blockchain).toBeInstanceOf(Blockchain)

    })
})