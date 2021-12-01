import { EthDef } from "../../compiled/Eth";
import { Web3js } from "../web3";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";

export class Eth implements EthDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  getBalance(address: string, defaultBlock: string | null): string | Promise<string> {
    return this.web3.eth.getBalance(address, defaultBlock)
  }
  
  getAccounts(): string[] | Promise<string[]> {
    return this.web3.eth.getAccounts()
  }
  
  getBlockNumber(): number | Promise<number> {
    return this.web3.eth.getBlockNumber();
  }
  
  async getFeeHistory(blockCount: number, newestBlock: number, rewardPercentiles: number[]): Promise<{ baseFeePerGas: string[]; gasUsedRatio: number[]; oldestBlock: number; reward: string[] }> {
    return this.web3.eth.getFeeHistory(blockCount, newestBlock, rewardPercentiles);
  }
  
  getGasPrice(): string | Promise<string> {
    return this.web3.eth.getGasPrice();
  }
  
  call(callObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null } | null; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, defaultBlock: string, callParams: CallParams<"callObject" | "defaultBlock">): string | Promise<string> {
    return this.web3.eth.call(callObject, defaultBlock);
  }
  
  estimateGas(callObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null } | null; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, callParams: CallParams<"callObject">): string | Promise<string> {
    return this.web3.eth.estimateGas(callObject);
  }
  
  getBlock(blockHashOrBlockNumber: string, callParams: CallParams<"blockHashOrBlockNumber">): { difficulty: string; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: string; transactions: string[]; transactionsRoot: string; uncles: string[] } | Promise<{ difficulty: string; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: string; transactions: string[]; transactionsRoot: string; uncles: string[] }> {
    return this.web3.eth.getBlock(blockHashOrBlockNumber);
  }
  
  getBlockTransactionCount(blockHashOrBlockNumber: string, callParams: CallParams<"blockHashOrBlockNumber">): number | Promise<number> {
    return this.web3.eth.getBlockTransactionCount(blockHashOrBlockNumber);
  }
  
  getBlockUncleCount(blockHashOrBlockNumber: string, callParams: CallParams<"blockHashOrBlockNumber">): number | Promise<number> {
    return this.web3.eth.getBlockUncleCount(blockHashOrBlockNumber);
  }
  
  getChainId(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.getChainId(callParams);
  }
  
  getCode(address: string, defaultBlock: string | null, callParams: CallParams<"address" | "defaultBlock">): string | Promise<string> {
    return this.web3.eth.getCode(address, defaultBlock);
  }
  
  getNodeInfo(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.eth.getNodeInfo(callParams);
  }
  
  getPastLogs(options: { address: string; fromBlock: string; toBlock: string; topics: string[] }, callParams: CallParams<"options">): { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[] | Promise<{ address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]> {
    return this.web3.eth.getPastLogs(options);
  }
  
  getPendingTransactions(callParams: CallParams<null>): { blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }[] | Promise<{ blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }[]> {
    return this.web3.eth.getPendingTransactions();
  }
  
  getProof(address: string, storageKey: string[], blockNumber: string, callParams: CallParams<"address" | "storageKey" | "blockNumber">): { accountProof: string[]; address: string; balance: string; codeHash: string; nonce: string; storageHash: string; storageProof: { key: string; value: string }[] } | Promise<{ accountProof: string[]; address: string; balance: string; codeHash: string; nonce: string; storageHash: string; storageProof: { key: string; value: string }[] }> {
    return this.web3.eth.getProof(address, storageKey, blockNumber);
  }
  
  getStorageAt(address: string, position: string, defaultBlock: string | null, callParams: CallParams<"address" | "position" | "defaultBlock">): string | Promise<string> {
    return this.web3.eth.getStorageAt(address, position, defaultBlock);
  }
  
  getTransaction(transactionHash: string, callParams: CallParams<"transactionHash">): { blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string } | Promise<{ blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }> {
    return this.web3.eth.getTransaction(transactionHash);
  }
  
  getTransactionCount(address: string, defaultBlock: string, callParams: CallParams<"address" | "defaultBlock">): number | Promise<number> {
    return this.web3.eth.getTransactionCount(address, defaultBlock);
  }
  
  getTransactionFromBlock(hashString: string, indexNumber: number, callParams: CallParams<"hashString" | "indexNumber">): { blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string } | Promise<{ blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }> {
    return this.web3.eth.getTransactionFromBlock(hashString, indexNumber);
  }
  
  getTransactionReceipt(hash: string, callParams: CallParams<"hash">): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; status: boolean; to: string | null; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; status: boolean; to: string | null; transactionHash: string; transactionIndex: number }> {
    return this.web3.eth.getTransactionReceipt(hash);
  }
  
  getUncle(blockHashOrBlockNumber: string, uncleIndex: number, callParams: CallParams<"blockHashOrBlockNumber" | "uncleIndex">): { difficulty: string; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: string; transactions: string[]; transactionsRoot: string; uncles: string[] } | Promise<{ difficulty: string; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: string; transactions: string[]; transactionsRoot: string; uncles: string[] }> {
    return this.web3.eth.getUncle(blockHashOrBlockNumber, uncleIndex);
  }
  
  getWork(callParams: CallParams<null>): string[] | Promise<string[]> {
    return this.web3.eth.getWork();
  }
  
  sendSignedTransaction(signedTransactionData: string, callParams: CallParams<"signedTransactionData">): string | Promise<string> {
    return this.web3.eth.sendSignedTransaction(signedTransactionData);
  }
  
  sendTransaction(transactionObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null } | null; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, callParams: CallParams<"transactionObject">): string | Promise<string> {
    return this.web3.eth.sendTransaction(transactionObject);
  }
  
  sign(dataToSign: string, address: string, callParams: CallParams<"dataToSign" | "address">): string | Promise<string> {
    return this.web3.eth.sign(dataToSign, address);
  }
  
  signTransaction(transactionObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null } | null; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, address: string, callParams: CallParams<"transactionObject" | "address">): { raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } } | Promise<{ raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } }> {
    return this.web3.eth.signTransaction(transactionObject, address);
  }
  
  submitWork(nonce: string, powHash: string, digest: string, callParams: CallParams<"nonce" | "powHash" | "digest">): boolean | Promise<boolean> {
    return this.web3.eth.submitWork(nonce, powHash, digest);
  }
  
}
