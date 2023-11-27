import axios from 'axios'

import { MempoolRecommendedFee, MempoolState, SDKConfig } from "../types"

export class Mempool {
  private apiV1URL: string
  private logger: (arg: string) => void
  constructor(config: SDKConfig) {
    this.apiV1URL = config.baseAPIURL || 'https://api.bitaps.com/bgl/v1/blockchain'
    this.logger = this.logger || ((arg) => arg)
  }

  /**
   * @param limit limit per page
   * @param order order results by des, asc etc
   * @param fromTimestamp timestamp limit to fetch up th current timestamp
   * @param page number of page results to fetch default = 1
   * getMempoolTransactions fetches txes in the mempool
   */
  public async getMempoolTransactions(limit?: number, order?: string, fromTimestamp?: number, page = 1): Promise<Mempool> {
    const url = `${this.apiV1URL}/mempool/transactions?page=${page}&limit=${limit}&order=${order}&from_timestamp=${fromTimestamp}`
    const data = await this._get(url)
    return data as Mempool

  }

  /**
   * @param limit limit per page
   * @param order order results by des, asc etc
   * @param fromTimestamp timestamp limit to fetch up th current timestamp
   * @param page number of page results to fetch default = 1
 * getMempoolState fetches mempool state
 */
  public async getMempoolState(limit?: number, order?: string, fromTimestamp?: number, page = 1): Promise<MempoolState> {
    const url = `${this.apiV1URL}/mempool/transactions?page=${page}&limit=${limit}&order=${order}&from_timestamp=${fromTimestamp}`
    const data = await this._get(url)
    return data as MempoolState
  }

  /**
   * @param limit limit per page
   * @param order order results by des, asc etc
   * @param fromTimestamp timestamp limit to fetch up th current timestamp
   * @param page number of page results to fetch default = 1
   * getInvalidMempoolTransanctions
   */
  public async getInvalidMempoolTransanctions(limit?: number, order?: string, fromTimestamp?: number, page = 1) {
    const url = `${this.apiV1URL}/mempool/invalid/transactions?page=${page}&limit=${limit}&order=${order}&from_timestamp=${fromTimestamp}`
    const data = await this._get(url)
    return data as Mempool
  }

  /**
   * @param limit limit per page
   * @param order order results by des, asc etc
   * @param fromTimestamp timestamp limit to fetch up th current timestamp
   * @param page number of page results to fetch default = 1

   * getDoubleSpendTransactions
   */
  public async getDoubleSpendTransactions(page?: number, limit?: number, order?: string, fromTimestamp?: number) {
    const url = `${this.apiV1URL}/mempool/doublespend/transactions?page=${page}&limit=${limit}&order=${order}&from_timestamp=${fromTimestamp}`
    const data = await this._get(url)
    return data as MempoolState
  }

  public async getMempoolRecommendedFee(page?: number, limit?: number, order?: string, fromTimestamp?: number) {
    const url = `${this.apiV1URL}/mempool/recommended/fee?page=${page}&limit=${limit}&order=${order}&from_timestamp=${fromTimestamp}`
    const data = await this._get(url)
    return data as MempoolRecommendedFee
  }

  /// BEGIN PRIVATE METHODS
  private async _get(url: string) {
    try {
      const res = await axios.get(url)
      const { data } = res.data
      return data
    } catch (error) {
      this.logger(error)
      return
    }
  }
}