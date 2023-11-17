import axios from 'axios'

type SDKConfig = {
  baseAPIURL: string
  logger: (arg: string) => void
  apiKey?: string
}

export class BitgesellBlockchainSDK {
  private baseAPIURL: string
  private baseV1URL: string = 'https://api.bitaps.com/bgl/v1/blockchain'
  private logger: (arg: string) => void

  constructor(config: SDKConfig) {
    this.baseAPIURL = config.baseAPIURL || this.baseV1URL
    this.logger = config.logger || ((arg: string) => arg)
  }

  private async _get(url: string) {
    try {
      const res = await axios.get(`${this.baseAPIURL}/${url}`)
      const { data } = res.data
      return data
    } catch (error) {
      this.logger(error)
      return

    }
  }
}