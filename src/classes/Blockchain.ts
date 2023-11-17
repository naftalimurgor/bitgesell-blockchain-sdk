import axios from 'axios'
import { Block, BlockHeader, BlockStats as BlockData, SDKConfig, Transactions as BlockTransactions, UTXOs } from '../types';

export class Blockchain {
  private apiV1URL: string
  private logger: (arg: string) => void
  constructor(config: SDKConfig) {
    this.apiV1URL = config.baseAPIURL || 'https://api.bitaps.com/bgl/v1/blockchain'
    this.logger = this.logger || ((arg) => arg)
  }

  /**
   * @param blockHash block hash for bock to be fetched
   * getBlockByHash returns a given block by a given block hash
   */
  public async getBlockByHash(blockHash: string): Promise<Block> {
    const url = `${this.apiV1URL}/block/${blockHash}`
    const data = await this._get(url)
    return data as Block

  }

  /**
   * @param blockCount number of blocks to fetch eg. last 10 blocks etc.
   * getBlockHeight returns block at a given blockcount/blockheight
   */
  public async getLastBlocksByCount(blockCount: number): Promise<Array<Block>> {
    const url = `${this.apiV1URL}/blocks/last/${blockCount}`
    const data = await this._get(url)
    return data as Array<Block>
  }

  /**
   * getBlocksToday fetches blocks mined "today"
   */
  public async getBlocksToday(): Promise<Array<Block>> {
    const url = `${this.apiV1URL}/blocks/today`
    const data = await this._get(url)
    return data as Array<Block>

  }

  /**
   * @param date YYYYMMDD
   * getBlocksByDate fetches blocks by date in the format YYYYMMDD
   */
  public async getBlocksByDate(date: string): Promise<Array<Block>> {
    const url = `${this.apiV1URL}/blocks/date/${date}`
    const data = await this._get(url)
    return data as Array<Block>
  }

  /**
   * @param hours time in hours to fetch blocks since then
   * getBlocksByLastNHours fetches blocks mined from last n hours
   * @returns Array<Block>
   */
  public async getBlocksByLastNHours(hours: number): Promise<Array<Block>> {
    const url = `${this.apiV1URL}/blocks/last/${hours}/hours`
    const data = await this._get(url)
    return data as Array<Block>
  }

  /**
   * @param
   * getBlockHeaders by block height
   */
  public async getBlockHeaders(blockHeight: number, count?: number): Promise<BlockHeader> {
    const url = `${this.apiV1URL}/block/headers/${blockHeight}/${count}`
    const data = await this._get(url)
    return data as BlockHeader
  }

  /**
   * @param blockHeight height of the block to fetch
   * getBlockByHeight fetches a block at given Height
   */
  public async getBlockStatsByHeight(blockHeight: number): Promise<BlockData> {
    const url = `${this.apiV1URL}/block/data/${blockHeight}`
    const data = await this._get(url)
    return data as BlockData
  }

  /**
   * @param blockCount is the last number of blocks to query
   * getBlockDataLastNBlocks fetch block data by last n blocks of data
   */
  public async getBlockDataLastNBlocks(blockCount: number): Promise<Array<BlockData>> {
    const url = `${this.apiV1URL}/blocks/data/last/${blockCount}}`
    const data = await this._get(url)
    return data as Array<BlockData>
  }

  /**
   * getBlockDataForBlocksToday fetches blockdata of all blocks mined
   */
  public async getBlockDataForBlocksToday(): Promise<BlockData> {
    const url = `${this.apiV1URL}/blocks/data/today`
    const data = await this._get(url)
    return data as BlockData
  }

  /** 
   * @param date in YYYYDDMM format
   * getBlockDataByDate gets block data by data for a given block
   */
  public async getBlockDataByDate(date: string): Promise<Array<BlockData>> {
    const url = `${this.apiV1URL}/blocks/data/date/${date}`
    const data = await this._get(url)
    return data as Array<BlockData>
  }

  /**
   * 
   * getBlockDataLastNHours get blockdata for blocks mine in the last n {hours}
   */
  public async getBlockDataLastNHours(hours: number): Promise<Array<BlockData>> {
    const url = `${this.apiV1URL}/blocks/data/last/${hours}/hours`
    const data = await this._get(url)
    return data as Array<BlockData>
  }


  /**
   * @param blockHeight | blockHash
  * getBlockTransactions fetches block transactions
  */
  public async getBlockTransactions(blockHeight: string) {
    const url = `${this.apiV1URL}/block/transactions/${blockHeight}`
    const data = await this._get(url)
    return data as BlockTransactions
  }

  /**
   * @param blockHeight
   * getBlockUTXO fetch utxo in a block at a certain height
   */
  public async getBlockUTXO(blockHeight: number) {
    const url = `${this.apiV1URL}//block/utxo/${blockHeight}`
    const data = await this._get(url)
    return data as UTXOs
  }

  /// BEGIN PRIVATE METHODS
  private async _get(url: string) {
    try {
      const res = await axios.get(`${this.apiV1URL}/${url}`)
      const { data } = res.data
      return data
    } catch (error) {
      this.logger(error)
      return

    }
  }

}