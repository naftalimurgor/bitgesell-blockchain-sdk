import { BitgesellBlockchainSDK } from "../api"
import { sdkConfig } from "./sdkConfig"

describe('Blockchain API Wrapper tests', () => {

  let bitgesellBlockchainSDK: BitgesellBlockchainSDK
  // https://bitgesellexplorer.com/block-height/188547
  const blockHash = '00000000000000985c45a5acb8951598a9e1497acde2d66334caa96a0b1c8a63'
  const blockHeight = 188547

  beforeAll(() => {
    bitgesellBlockchainSDK = new BitgesellBlockchainSDK(sdkConfig)
  })

  it('should fetch block by block hash', async () => {
    const block = await bitgesellBlockchainSDK.blockchain.getBlockByHash(blockHash)
    expect(block).toBeDefined()
  })

  it('should fetch block by block height', async () => {
    const blockHeight = 2000
    const block = await bitgesellBlockchainSDK.blockchain.getBlockByHeight(blockHeight)
    expect(block).toBeDefined()
  })

  it('should fetch block by block count', async () => {
    const lastNBlocks = 5
    const block = await bitgesellBlockchainSDK.blockchain.getLastBlocksByCount(lastNBlocks)
    expect(block).toBeDefined()
  })

  it('should fetch blockStats by block height', async () => {
    const blockHeight = 2000
    const block = await bitgesellBlockchainSDK.blockchain.getBlockStatsByHeight(blockHeight)
    expect(block).toBeDefined()
  })

  it('should fetch block data by of the last N number of blocks', async () => {
    const lastBlocks = 200
    const block = await bitgesellBlockchainSDK.blockchain.getBlockDataLastNBlocks(lastBlocks)
    expect(block).toBeDefined()
  })

  it('should fetch block by block data for blocks mined today', async () => {
    const block = await bitgesellBlockchainSDK.blockchain.getBlockDataForBlocksToday()
    expect(block).toBeDefined()
  })

  it('should fetch block data by date in yyyy-mmd-dd', async () => {
    /// date yyyymmdd
    const date = '20220305'
    const block = await bitgesellBlockchainSDK.blockchain.getBlockDataByDate(date)
    expect(block).toBeDefined()
  })

  it('should fetch blocks by given date', async () => {
    /// date yyyy-mmdd
    const date = '20220305'
    const block = await bitgesellBlockchainSDK.blockchain.getBlocksByDate(date)
    expect(block).toBeDefined()
  })

  it('should fetch block by block hash', async () => {
    // last 24 hours
    const blocks = await bitgesellBlockchainSDK.blockchain.getBlocksByLastNHours(24)
    expect(blocks).toBeDefined()
  })

  it('should fetch unconfirmedBlockTransactions by blockHash', async () => {
    const unconfirmedTransaction = await bitgesellBlockchainSDK.blockchain.getBlockTransactions(blockHeight)
    expect(unconfirmedTransaction).toBeDefined()
  })

  it('should fetch block UTXOs by block hash', async () => {
    const blockHeight = 300
    const block = await bitgesellBlockchainSDK.blockchain.getBlockUTXO(blockHeight)
    expect(block).toBeDefined()
  })


})