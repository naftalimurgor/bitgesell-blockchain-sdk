import { Address, } from './classes/Address'
import { Blockchain } from './classes/Blockchain'
import { Mempool } from './classes/Mempool'
import { Transaction } from './classes/Transactions'
import { SDKConfig } from './types'


export class BitgesellBlockchainSDK {
  public readonly blockchain: Blockchain
  public readonly tx: Transaction
  public readonly mempool: Mempool
  public readonly address: Address
  constructor(config: SDKConfig) {
    this.blockchain = new Blockchain(config)
    this.tx = new Transaction(config)
    this.mempool = new Mempool(config)
    this.address = new Address(config)
  }
}

export { Address, Mempool, Transaction, SDKConfig, Blockchain }