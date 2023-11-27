import axios from 'axios'
import { AddressTransaction, SDKConfig, TransactionMerkelProof } from '../types'

export class Transaction {
  private apiV1URL: string
  private logger: (arg: string) => void
  constructor(config: SDKConfig) {
    this.apiV1URL = config.baseAPIURL || 'https://api.bitaps.com/bgl/v1/blockchain'
    this.logger = this.logger || ((arg) => arg)
  }

  /**
   * @param txHash transaction hash of the the transaction to fetch
   * getTransactionByHash fetches a transaction by its hash
   */
  public async getTransactionByHash(txHash: string) {
    const url = `${this.apiV1URL}/transaction/${txHash}`
    const data = await this._get(url)
    return data as AddressTransaction
  }

  /**
   * @param txHash
   * getTransactonMerkelProof fetches the MerkelProof of a transaction
   */
  public async getTransactonMerkleProof(txHash: string) {
    const url = `${this.apiV1URL}/transaction/merkle_proof/${txHash}`
    const data = await this._get(url)
    return data as TransactionMerkelProof
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