import { EthDef } from "../../compiled/Eth";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";
import Web3js from 'web3'
import { BlockNumber, chain, hardfork } from "web3-core";
import { Syncing } from "web3-eth";

export class Eth implements EthDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  getId(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.net.getId()
  }
  
  getPeerCount(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.net.getPeerCount()
  }
  
  isListening(callParams: CallParams<null>): boolean | Promise<boolean> {
    return this.web3.eth.net.isListening()
  }
  
  getBalance(address: string, defaultBlock: string | null): string | Promise<string> {
    return this.web3.eth.getBalance(address, defaultBlock as BlockNumber)
  }
  
  getAccounts(): string[] | Promise<string[]> {
    return this.web3.eth.getAccounts()
  }
  
  getBlockNumber(): number | Promise<number> {
    return this.web3.eth.getBlockNumber();
  }
  
  getFeeHistory(blockCount: number, newestBlock: number, rewardPercentiles: number[]): Promise<{ baseFeePerGas: string[]; gasUsedRatio: number[]; oldestBlock: number; reward: string[][] }> {
    return this.web3.eth.getFeeHistory(blockCount, newestBlock, rewardPercentiles);
  }
  
  getGasPrice(): string | Promise<string> {
    return this.web3.eth.getGasPrice();
  }
  
  call(callObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, defaultBlock: string | null, callParams: CallParams<"callObject" | "defaultBlock">): string | Promise<string> {
    let baseChain = callObject.common!.baseChain! as chain
    let hardfork = callObject.common!.hardfork! as hardfork
    return this.web3.eth.call({
      ...callObject,
      common: {
        ...callObject.common, customChain: {
          ...callObject.common.customChain,
          name: callObject.common.customChain.name ? callObject.common.customChain.name : undefined
        }, baseChain, hardfork
      }
    }, defaultBlock);
  }
  
  estimateGas(callObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, callParams: CallParams<"callObject">): number | Promise<number> {
    let baseChain = callObject.common!.baseChain! as chain
    let hardfork = callObject.common!.hardfork! as hardfork
    return this.web3.eth.estimateGas({ ...callObject, common: { ...callObject.common, baseChain, hardfork } });
  }
  
  async getBlock(blockHashOrBlockNumber: string, callParams: CallParams<"blockHashOrBlockNumber">): Promise<{ difficulty: number; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: number; transactions: string[]; transactionRoot: string; uncles: string[] }> {
    const response = await this.web3.eth.getBlock(blockHashOrBlockNumber);
    return {
      ...response,
      timestamp: Number(response.timestamp)
    }
  }
  
  getBlockTransactionCount(blockHashOrBlockNumber: string, callParams: CallParams<"blockHashOrBlockNumber">): number | Promise<number> {
    return this.web3.eth.getBlockTransactionCount(blockHashOrBlockNumber);
  }
  
  getBlockUncleCount(blockHashOrBlockNumber: string, callParams: CallParams<"blockHashOrBlockNumber">): number | Promise<number> {
    return this.web3.eth.getBlockUncleCount(blockHashOrBlockNumber);
  }
  
  getChainId(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.getChainId();
  }
  
  getCode(address: string, defaultBlock: string | null, callParams: CallParams<"address" | "defaultBlock">): string | Promise<string> {
    return this.web3.eth.getCode(address, defaultBlock);
  }
  
  getNodeInfo(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.eth.getNodeInfo();
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
  
  getTransactionCount(address: string, defaultBlock: string | null, callParams: CallParams<"address" | "defaultBlock">): number | Promise<number> {
    return this.web3.eth.getTransactionCount(address, defaultBlock);
  }
  
  getTransactionFromBlock(hashString: string, indexNumber: number, callParams: CallParams<"hashString" | "indexNumber">): { blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string } | Promise<{ blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }> {
    return this.web3.eth.getTransactionFromBlock(hashString, indexNumber);
  }
  
  async getTransactionReceipt(hash: string, callParams: CallParams<"hash">): Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; status: boolean; to: string | null; transactionHash: string; transactionIndex: number }> {
    let result = await this.web3.eth.getTransactionReceipt(hash);
    return {
      ...result,
      contractAddress: result.contractAddress || null
    }
  }
  
  async getUncle(blockHashOrBlockNumber: string, uncleIndex: number, callParams: CallParams<"blockHashOrBlockNumber" | "uncleIndex">): Promise<{ difficulty: number; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: number; transactions: string[]; transactionRoot: string; uncles: string[] }> {
    const response = await this.web3.eth.getUncle(blockHashOrBlockNumber, uncleIndex);
    return {
      ...response,
      timestamp: Number(response.timestamp)
    }
  }
  
  getWork(callParams: CallParams<null>): string[] | Promise<string[]> {
    return this.web3.eth.getWork();
  }
  
  async sendSignedTransaction(signedTransactionData: string, callParams: CallParams<"signedTransactionData">): Promise<string> {
    let response = await this.web3.eth.sendSignedTransaction(signedTransactionData);
    return response.transactionHash
  }
  
  async sendTransaction(transactionObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, callParams: CallParams<"transactionObject">): Promise<string> {
    let baseChain = transactionObject.common!.baseChain! as chain
    let hardfork = transactionObject.common!.hardfork! as hardfork
    
    let response = await this.web3.eth.sendTransaction({
      ...transactionObject,
      common: { ...transactionObject.common, baseChain, hardfork }
    });
    return response.transactionHash
  }
  
  sign(dataToSign: string, address: string, callParams: CallParams<"dataToSign" | "address">): string | Promise<string> {
    return this.web3.eth.sign(dataToSign, address);
  }
  
  signTransaction(transactionObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, address: string, callParams: CallParams<"transactionObject" | "address">): { raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } } | Promise<{ raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } }> {
    let baseChain = transactionObject.common!.baseChain! as chain
    let hardfork = transactionObject.common!.hardfork! as hardfork
    
    return this.web3.eth.signTransaction({
      ...transactionObject,
      common: { ...transactionObject.common, baseChain, hardfork }
    }, address);
  }
  
  submitWork(nonce: string, powHash: string, digest: string, callParams: CallParams<"nonce" | "powHash" | "digest">): Promise<boolean> {
    // @ts-ignore
    return this.web3.eth.submitWork(nonce, powHash, digest);
  }
  
  getCoinbase(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.eth.getCoinbase();
  }
  
  getHashrate(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.getHashrate();
  }
  
  async getMetaInformation(callParams: CallParams<null>): Promise<{ defaultAccount: string; defaultBlock: string; defaultChain: string; defaultHardfork: string; handleRevert: boolean; isMining: boolean; isSyncing: { currentBlock: number; highestBlock: number; knownStates: number; pulledStates: number; startingBlock: number } | null; transactionBlockTimeout: number; transactionConfirmationBlocks: number; transactionPollingTimeout: number }> {
    let response: Syncing | boolean = await this.web3.eth.isSyncing()
    let isSyncing: { currentBlock: number; highestBlock: number; knownStates: number; pulledStates: number; startingBlock: number } | null = null
    if (typeof response === 'object') isSyncing = {
      currentBlock: response.CurrentBlock,
      highestBlock: response.HighestBlock,
      knownStates: response.KnownStates,
      pulledStates: response.PulledStates,
      startingBlock: response.StartingBlock
    }
    
    return {
      defaultAccount: this.web3.eth.defaultAccount,
      defaultBlock: String(this.web3.eth.defaultBlock),
      defaultChain: this.web3.eth.defaultChain,
      defaultHardfork: this.web3.eth.defaultHardfork,
      handleRevert: this.web3.eth.handleRevert,
      isMining: (await this.web3.eth.isMining()),
      isSyncing: isSyncing,
      transactionBlockTimeout: this.web3.eth.transactionBlockTimeout,
      transactionConfirmationBlocks: this.web3.eth.transactionConfirmationBlocks,
      transactionPollingTimeout: this.web3.eth.transactionPollingTimeout
    };
  }
  
}
