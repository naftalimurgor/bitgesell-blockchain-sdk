import { BitgesellBlockchainSDK } from "../api"
// import { sdkConfig } from "./sdkConfig"

describe.only('Address Wrapper class tests', () => {
  const sdkConfig = {
    baseAPIURL: 'https://api.bitaps.com/bgl/v1/blockchain',
    logger: console.log
  }

  let bitgesellBlockchainSDK: BitgesellBlockchainSDK
  const bitgesellAddress = 'bgl1qlmzckh904vze03n0lwzptt5dkmvf2vj3ev4qm9'

  beforeAll(() => {
    bitgesellBlockchainSDK = new BitgesellBlockchainSDK(sdkConfig)
  })

  it('should fetch address balance', async () => {
    try {
      const addressBalance = await bitgesellBlockchainSDK.address.getAddressBalance(bitgesellAddress)
      expect(addressBalance).toBeDefined()
    } catch (error) {
      console.log(error)
    }
  })

  it('should get address transactions', async () => {
    const addressTxes = await bitgesellBlockchainSDK.address.getAddressTransactions(bitgesellAddress)
    expect(addressTxes).toBeDefined()
  })

  it('should get address UTXO', async () => {
    const addressUTXOs = await bitgesellBlockchainSDK.address.getAddressUTXO(bitgesellAddress)
    expect(addressUTXOs).toBeDefined()
  })

  it('should get address unconfirmed transactions', async () => {
    const addressTxes = await bitgesellBlockchainSDK.address.getUnconfirmedAddressTransactions(bitgesellAddress)
    expect(addressTxes).toBeDefined()
  })


})