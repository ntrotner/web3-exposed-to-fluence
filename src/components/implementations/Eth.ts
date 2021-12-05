import { EthDef } from '../../compiled/Eth';
import { CallParams } from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';
import Web3js from 'web3';
import { BlockNumber, chain, hardfork } from 'web3-core';
import { Syncing } from 'web3-eth';

/**
 * allows access to the Eth module
 *
 * see https://web3js.readthedocs.io/en/v1.5.2/web3-eth.html
 */
export class Eth implements EthDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
  }
  
  getId(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.net.getId();
  }
  
  getPeerCount(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.net.getPeerCount();
  }
  
  isListening(callParams: CallParams<null>): boolean | Promise<boolean> {
    return this.web3.eth.net.isListening();
  }
  
  /**
   * wraps eth.getBalance
   *
   * when passing a string for defaultBlock, a valid predefined needs to be used,
   * else the function throws an error
   *
   * @param address
   * @param defaultBlock
   */
  getBalance(address: string, defaultBlock: string | null): string | Promise<string> {
    return this.web3.eth.getBalance(address, defaultBlock ? defaultBlock as BlockNumber : null);
  }
  
  getAccounts(): string[] | Promise<string[]> {
    return this.web3.eth.getAccounts();
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
  
  /**
   * wraps eth.call
   *
   * object values callObject.common.hardfork and callObject.common.baseChain need special strings,
   * else the call will fail
   *
   * @param callObject
   * @param defaultBlock
   * @param callParams
   */
  call(callObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, defaultBlock: string | null, callParams: CallParams<'callObject' | 'defaultBlock'>): string | Promise<string> {
    return this.web3.eth.call({
      ...callObject,
      common: callObject.common ? {
        ...callObject.common,
        hardfork: callObject.common.hardfork ? callObject.common.hardfork as hardfork : null,
        baseChain: callObject.common.baseChain ? callObject.common.hardfork as chain : null,
        customChain: callObject.common.customChain ? {
          ...callObject.common.customChain,
          name: callObject.common.customChain.name ? callObject.common.customChain.name : null
        } : null
      } : null
    }, defaultBlock);
  }
  
  /**
   * wraps eth.estimateGas
   *
   * object values callObject.common.hardfork and callObject.common.baseChain need special strings,
   * else the call will fail
   *
   * @param callObject
   * @param callParams
   */
  estimateGas(callObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, callParams: CallParams<'callObject'>): number | Promise<number> {
    return this.web3.eth.estimateGas({
      ...callObject,
      common: callObject.common ? {
        ...callObject.common,
        baseChain: callObject.common.baseChain ? callObject.common.baseChain as chain : null,
        hardfork: callObject.common.hardfork ? callObject.common.hardfork as hardfork : null
      } : null
    });
  }
  
  /**
   * wraps eth.getBlock
   *
   * timestamp is returns as a number
   *
   * @param blockHashOrBlockNumber
   * @param callParams
   */
  async getBlock(blockHashOrBlockNumber: string, callParams: CallParams<'blockHashOrBlockNumber'>): Promise<{ difficulty: number; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: number; transactions: string[]; transactionRoot: string; uncles: string[] }> {
    const response = await this.web3.eth.getBlock(blockHashOrBlockNumber);
    return response ? {
      ...response,
      timestamp: response.timestamp ? Number(response.timestamp) : null
    } : null;
  }
  
  getBlockTransactionCount(blockHashOrBlockNumber: string, callParams: CallParams<'blockHashOrBlockNumber'>): number | Promise<number> {
    return this.web3.eth.getBlockTransactionCount(blockHashOrBlockNumber);
  }
  
  getBlockUncleCount(blockHashOrBlockNumber: string, callParams: CallParams<'blockHashOrBlockNumber'>): number | Promise<number> {
    return this.web3.eth.getBlockUncleCount(blockHashOrBlockNumber);
  }
  
  getChainId(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.getChainId();
  }
  
  getCode(address: string, defaultBlock: string | null, callParams: CallParams<'address' | 'defaultBlock'>): string | Promise<string> {
    return this.web3.eth.getCode(address, defaultBlock);
  }
  
  getNodeInfo(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.eth.getNodeInfo();
  }
  
  getPastLogs(options: { address: string; fromBlock: string; toBlock: string; topics: string[] }, callParams: CallParams<'options'>): { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[] | Promise<{ address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]> {
    return this.web3.eth.getPastLogs(options);
  }
  
  getPendingTransactions(callParams: CallParams<null>): { blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }[] | Promise<{ blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }[]> {
    return this.web3.eth.getPendingTransactions();
  }
  
  getProof(address: string, storageKey: string[], blockNumber: string, callParams: CallParams<'address' | 'storageKey' | 'blockNumber'>): { accountProof: string[]; address: string; balance: string; codeHash: string; nonce: string; storageHash: string; storageProof: { key: string; value: string }[] } | Promise<{ accountProof: string[]; address: string; balance: string; codeHash: string; nonce: string; storageHash: string; storageProof: { key: string; value: string }[] }> {
    return this.web3.eth.getProof(address, storageKey, blockNumber);
  }
  
  getStorageAt(address: string, position: string, defaultBlock: string | null, callParams: CallParams<'address' | 'position' | 'defaultBlock'>): string | Promise<string> {
    return this.web3.eth.getStorageAt(address, position, defaultBlock);
  }
  
  getTransaction(transactionHash: string, callParams: CallParams<'transactionHash'>): { blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string } | Promise<{ blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }> {
    return this.web3.eth.getTransaction(transactionHash);
  }
  
  getTransactionCount(address: string, defaultBlock: string | null, callParams: CallParams<'address' | 'defaultBlock'>): number | Promise<number> {
    return this.web3.eth.getTransactionCount(address, defaultBlock);
  }
  
  getTransactionFromBlock(hashString: string, indexNumber: number, callParams: CallParams<'hashString' | 'indexNumber'>): { blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string } | Promise<{ blockHash: string; blockNumber: number; from: string; gas: number; gasPrice: string; hash: string; input: string; nonce: number; to: string; transactionIndex: number; value: string }> {
    return this.web3.eth.getTransactionFromBlock(hashString, indexNumber);
  }
  
  /**
   * wraps eth.getUncle
   *
   * timestamp is returns as a number
   *
   * @param blockHashOrBlockNumber
   * @param uncleIndex
   * @param callParams
   */
  async getUncle(blockHashOrBlockNumber: string, uncleIndex: number, callParams: CallParams<'blockHashOrBlockNumber' | 'uncleIndex'>): Promise<{ difficulty: number; extraData: string; gasLimit: number; gasUsed: number; hash: string; logsBloom: string | null; miner: string; nonce: string | null; number: number; parentHash: string; sha3Uncles: string; size: number; stateRoot: string; timestamp: number; totalDifficulty: number; transactions: string[]; transactionRoot: string; uncles: string[] } | null> {
    const response = await this.web3.eth.getUncle(blockHashOrBlockNumber, uncleIndex);
    return response ? {
      ...response,
      timestamp: response.timestamp ? Number(response.timestamp) : null
    } : null;
  }
  
  getWork(callParams: CallParams<null>): string[] | Promise<string[]> {
    return this.web3.eth.getWork();
  }
  
  /**
   * wraps eth.sendSignedTransaction
   *
   * only returns transactionHash
   *
   * @param signedTransactionData
   * @param callParams
   */
  async sendSignedTransaction(signedTransactionData: string, callParams: CallParams<'signedTransactionData'>): Promise<string> {
    let response = await this.web3.eth.sendSignedTransaction(signedTransactionData);
    return response.transactionHash;
  }
  
  /**
   * wraps eth.sendTranscation
   *
   * returns the transcationHash
   *
   * @param transactionObject
   * @param callParams
   */
  async sendTransaction(transactionObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, callParams: CallParams<'transactionObject'>): Promise<string> {
    let response = await this.web3.eth.sendTransaction({
      ...transactionObject,
      common: transactionObject.common ? {
        ...transactionObject.common,
        baseChain: transactionObject.common.baseChain ? transactionObject.common.baseChain as chain : null,
        hardfork: transactionObject.common.hardfork ? transactionObject.common.hardfork as hardfork : null
      } : null
    });
    return response.transactionHash;
  }
  
  sign(dataToSign: string, address: string, callParams: CallParams<'dataToSign' | 'address'>): string | Promise<string> {
    return this.web3.eth.sign(dataToSign, address);
  }
  
  signTransaction(transactionObject: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, address: string, callParams: CallParams<'transactionObject' | 'address'>): { raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } } | Promise<{ raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } }> {
    return this.web3.eth.signTransaction({
      ...transactionObject,
      common: transactionObject.common ? {
        ...transactionObject.common,
        baseChain: transactionObject.common.baseChain ? transactionObject.common.baseChain as chain : null,
        hardfork: transactionObject.common.hardfork ? transactionObject.common.hardfork as hardfork : null
      } : null
    }, address);
  }
  
  submitWork(nonce: string, powHash: string, digest: string, callParams: CallParams<'nonce' | 'powHash' | 'digest'>): Promise<boolean> {
    // type definition of web3js is out of date
    // @ts-ignore
    return this.web3.eth.submitWork(nonce, powHash, digest);
  }
  
  getCoinbase(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.eth.getCoinbase();
  }
  
  getHashrate(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.eth.getHashrate();
  }
  
  /**
   * collects all meta information of eth
   *
   * @param callParams
   */
  async getMetaInformation(callParams: CallParams<null>): Promise<{ defaultAccount: string; defaultBlock: string; defaultChain: string; defaultHardfork: string; handleRevert: boolean; isMining: boolean; isSyncing: { currentBlock: number; highestBlock: number; knownStates: number; pulledStates: number; startingBlock: number } | null; transactionBlockTimeout: number; transactionConfirmationBlocks: number; transactionPollingTimeout: number }> {
    let response: Syncing | boolean = await this.web3.eth.isSyncing();
    let isSyncing: { currentBlock: number; highestBlock: number; knownStates: number; pulledStates: number; startingBlock: number } | null = null;
    if (typeof response === 'object') isSyncing = {
      currentBlock: response.CurrentBlock,
      highestBlock: response.HighestBlock,
      knownStates: response.KnownStates,
      pulledStates: response.PulledStates,
      startingBlock: response.StartingBlock
    };
    
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
  
  async getTransactionReceipt(hash: string, callParams: CallParams<'hash'>): Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    let response = await this.web3.eth.getTransactionReceipt(hash);
    return response ? { ...response, contractAddress: response.contractAddress || null } : null;
  }
  
}
