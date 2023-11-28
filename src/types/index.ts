
export type Block = {
  height: number,
  hash: string
  header: string,
  adjustedTimestamp: number
}

export interface SDKConfig {
  baseAPIURL: string
  logger?: (arg: string) => void
  apiKey?: string
}

export type BlockHeader = {
  data: Array<any>,
  time: number
}

export type BlockStats = {
  height: number,
  hash: string,
  header: string,
  version: number,
  previousBlockHash: string,
  merkleRoot: string,
  bits: number,
  nonce: number,
  weight: number,
  size: number,
  strippedSize: number,
  amount: number,
  target: string,
  miner: string,
  medianBlockTime: number,
  blockTime: number,
  receivedTimestamp: number,
  adjustedTimestamp: number,
  bitsHex: string,
  nonceHex: string,
  versionHex: string,
  difficulty: number,
  blockDifficulty: number,
  nextBlockHash: string,
  estimatedBlockReward: number,
  blockReward: number,
  blockFeeReward: number,
  confirmations: number,
  transactionsCount: number,
  coinbase: string,
  statistics: object
  time: number
}

type Transaction = {

  segwit: boolean,
  rbf: boolean,
  txId: string,
  hash: string,
  version: number,
  size: number,
  vSize: number,
  bSize: number,
  lockTime: number,
  vIn: object,
  vOut: object,
  confirmations: number,
  blockIndex: number,
  coinbase: boolean,
  data: string,
  rawTx: string,
  amount: number,
  flag: string,
  weight: number,
  timestamp: number,
  merkleProof: string,
  inputsAmount: number,
  outputAddresses: number,
  inputAddresses: number,
  fee: number,
  outputsAmount: number,
  inputs: number,
  outputs: number

}

export type Transactions = {
  list: Array<Transaction>,
  page: number,
  pages: number,
  total: number,
  limit: number,
  time: number

}

type UTXO = {
  txId: string,
  vOut: number,
  txIndex: number,
  amount: number,
  address: string,
  script: string,
  type: string,
  time: number
} /// End UTXO types

export type UTXOs = Array<UTXO>

/// BEGIN MEMPOOL Types
export type MempoolTxes = {
  list: Array<unknown>,
  page: number,
  limit: number,
  pages: number,
  count: number,
  fromTimestamp: number
  time: number
}

export type MempoolState = {
  inputs: object,
  outputs: object,
  transactions: object
  time: number
}

export type MempoolRecommendedFee = {
  best: number
  best4h: number
  bestHourly: number
  time: number
} /// END Mempool Types

/// BEGIN Address types
export type AddressBalance = {
  balance: number,
  receivedAmount: number,
  receivedTxCount: number,
  sentAmount: number,
  sentTxCount: number,
  firstReceivedTxPointer: string,
  firstSentTxPointer: string,
  lastTxPointer: string,
  largestSpentTxAmount: number,
  largestSpentTxPointer: string,
  largestReceivedTxAmount: number,
  largestReceivedTxPointer: string,
  receivedOutsCount: number,
  spentOutsCount: number,
  pendingReceivedAmount: number,
  pendingSentAmount: number,
  pendingReceivedTxCount: number,
  pendingSentTxCount: number,
  pendingReceivedOutsCount: number,
  pendingSpentOutsCount: number,
  type: string
}


export type AddressTransaction = {
  segwit: boolean,
  rbf: boolean,
  txId: string,
  version: number,
  size: number,
  vSize: number,
  bSize: number,
  lockTime: number,
  vIn: object,
  vOut: object,
  confirmations: number,
  blockTime: number,
  blockIndex: number,
  coinbase: boolean,
  fee: number,
  data: string,
  amount: number,
  weight: number,
  blockHeight: number,
  timestamp: number,
  inputsAmount: number,
  inputAddressCount: number,
  outAddressCount: number,
  inputsCount: number,
  outsCount: number,
  outputsAmount: number,
  addressReceived: number,
  addressOuts: number,
  addressSent: number,
  addressInputs: number,
}
export type AddressTransactions = {
  list: Array<AddressTransaction>,
  page: number,
  limit: number,
  pages: number
  time: number
}

type AddressUTXO = {
  txId: string,
  vOut: number,
  block: number,
  txIndex: number,
  amount: number
}

export type AddressUTXOs = Array<AddressUTXO> /// END ADDRESS types


export type TransactionMerkelProof = {
  blockHeight: number,
  blockIndex: number
  merkleProof: string
  time: number
}