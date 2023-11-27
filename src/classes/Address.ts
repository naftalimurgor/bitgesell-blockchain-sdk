import axios from 'axios'

import { AddressBalance, AddressTransactions, AddressUTXOs, SDKConfig } from "../types"

export class Address {
  private apiV1URL: string
  private logger: (arg: string) => void
  constructor(config: SDKConfig) {
    this.apiV1URL = config.baseAPIURL || 'https://api.bitaps.com/bgl/v1/blockchain'
    this.logger = this.logger || ((arg) => arg)
  }

  /**
   * @param Bitgesell mainnet address
   * getAddressBalance for a mainnet address
   */
  public async getAddressBalance(address: string) {
    const url = `${this.apiV1URL}/address/state/${address}`
    // console.log(url)
    const data = await this._get(url)
    return data as AddressBalance
  }

  /**
   * @param address A Bitgesell mainnet address
   * getAddressTransactions for a mainnet address
   */
  public async getAddressTransactions(address: string) {
    const url = `${this.apiV1URL}/address/transactions/${address}`
    const data = await this._get(url)
    return data as AddressTransactions
  }

  /**
   * @param address A Bitgesell Mainnet address
   * getUnconfirmedAddressTransactions get unconfirmed address transactions for and address
   */
  public async getUnconfirmedAddressTransactions(address: string) {
    const url = `${this.apiV1URL}/address/unconfirmed/transactions/${address}`
    const data = await this._get(url)
    return data as AddressTransactions

  }

  /**
   * @param address A bitgesell mainnet address
   * getAddressUTXO fetches unpsent transaction output(UTXO) for an address
   */
  public async getAddressUTXO(address: string) {
    const url = `${this.apiV1URL}/address/unconfirmed/transactions/${address}`
    const data = await this._get(url)
    return data as AddressUTXOs
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

