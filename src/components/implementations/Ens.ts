import Web3js from 'web3';
import { EnsDef } from '../../compiled/Ens';
import { CallParams } from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';
import { chain, hardfork } from 'web3-core';

/**
 * allows access to the ENS module
 *
 * see https://web3js.readthedocs.io/en/v1.5.2/web3-eth-ens.html
 */
export class Ens implements EnsDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
  }
  
  async getPubkey(ensName: string, callParams: CallParams<'ensName'>): Promise<string> {
    return JSON.stringify(await this.web3.eth.ens.getPubkey(ensName));
  }
  
  getAddress(ensName: string, callParams: CallParams<'ensName'>): string | Promise<string> {
    return this.web3.eth.ens.getAddress(ensName);
  }
  
  getContent(ensName: string, callParams: CallParams<'ensName'>): string | Promise<string> {
    return this.web3.eth.ens.getContent(ensName);
  }
  
  async getContenthash(ensName: string, callParams: CallParams<'ensName'>): Promise<{ decoded: string | null; error: { message: string; name: string; stack: string | null } | null; protocolType: string | null }> {
    let response = await this.web3.eth.ens.getContenthash(ensName);
    
    return response ? {
      ...response,
      error: response.error ? {
        ...response.error,
        stack: response.error.stack || null
      } : null
    } : null;
  }
  
  getMultihash(ensName: string, callParams: CallParams<'ensName'>): string | Promise<string> {
    return this.web3.eth.ens.getMultihash(ensName);
  }
  
  getOwner(name: string, callParams: CallParams<'name'>): string | Promise<string> {
    return this.web3.eth.ens.getOwner(name);
  }
  
  async getResolver(name: string, callParams: CallParams<'name'>): Promise<{ defaultAccount: string | null; defaultBlock: string; defaultChain: string; defaultCommon: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; defaultHardfork: string; handleRevert: boolean; options: { address: string; data: string | null; from: string | null; gas: number | null; gasPrice: string | null; jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[] }; transactionBlockTimeout: number; transactionConfirmationBlocks: number; transactionPollingTimeout: number }> {
    let response = await this.web3.eth.ens.getResolver(name);
    return {
      ...response,
      defaultBlock: String(response.defaultBlock),
      defaultCommon: response.defaultCommon ? {
        ...response.defaultCommon,
        baseChain: response.defaultCommon.baseChain ? response.defaultCommon.baseChain as chain : null,
        hardfork: response.defaultCommon.hardfork ? response.defaultCommon.hardfork as hardfork : null,
        customChain: response.defaultCommon.customChain ? {
          ...response.defaultCommon.customChain,
          name: response.defaultCommon.customChain.name || null
        } : null
      } : null,
      options: {
        ...response.options,
        data: response.options.data || null,
        gas: response.options.gas || null,
        from: response.options.from || null,
        gasPrice: response.options.gasPrice || null,
        jsonInterface: response.options.jsonInterface.map((jsonI) => {
          return {
            ...jsonI,
            anonymous: jsonI.anonymous || null,
            name: jsonI.name || null,
            gas: jsonI.gas || null,
            type: jsonI.type || null,
            stateMutability: jsonI.stateMutability as string || null,
            constant: jsonI.constant || null,
            outputs: jsonI.outputs ? jsonI.outputs.map((abiOutput) => {
              return {
                ...abiOutput,
                internalType: abiOutput.internalType || null
              };
            }) : null,
            payable: jsonI.payable || null,
            inputs: jsonI.inputs ? jsonI.inputs.map((abiInput) => {
              return {
                indexed: abiInput.indexed || null,
                internalType: abiInput.internalType || null,
                type: abiInput.type,
                name: abiInput.name
              };
            }) : null
          };
        })
      }
      
    };
  }
  
  getTTL(name: string, callParams: CallParams<'name'>): string | Promise<string> {
    return this.web3.eth.ens.getTTL(name);
  }
  
  isApprovalForAll(owner: string, operator: string, callParams: CallParams<'owner' | 'operator'>): boolean | Promise<boolean> {
    return this.web3.eth.ens.isApprovedForAll(owner, operator);
  }
  
  recordExists(name: string, callParams: CallParams<'name'>): boolean | Promise<boolean> {
    return this.web3.eth.ens.recordExists(name);
  }
  
  registryAddress(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.eth.ens.registryAddress;
  }
  
  /**
   * wraps eth.ens.setAddress
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param ensName
   * @param address
   * @param txConfig
   * @param callParams
   */
  setAddress(ensName: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'ensName' | 'address' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setAddress(ensName, address, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setApprovalForAll
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param operator
   * @param approval
   * @param txConfig
   * @param callParams
   */
  async setApprovalForAll(operator: string, approval: boolean, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'operator' | 'approval' | 'txConfig'>): Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setApprovalForAll(operator, approval, txConfig ? {
            ...txConfig,
            common: txConfig.common ? {
              ...txConfig.common,
              baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
              hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
            } : null
          } : null, (error, receipt) => {
            if (receipt) {
              res({ ...receipt, contractAddress: receipt.contractAddress || null });
            } else {
              rej(error);
            }
          }
        );
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setContent
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param ensName
   * @param hash
   * @param txConfig
   * @param callParams
   */
  setContent(ensName: string, hash: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'ensName' | 'hash' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setContent(ensName, hash, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setContentHash
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param ensName
   * @param hash
   * @param txConfig
   * @param callParams
   */
  setContenthash(ensName: string, hash: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'ensName' | 'hash' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setContenthash(ensName, hash, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setMultihash
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param ensName
   * @param hash
   * @param txConfig
   * @param callParams
   */
  setMultihash(ensName: string, hash: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'ensName' | 'hash' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setMultihash(ensName, hash, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setOwner
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param name
   * @param address
   * @param txConfig
   * @param callParams
   */
  setOwner(name: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'name' | 'txConfig' | 'address'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setOwner(name, address, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setPubkey
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param ensName
   * @param x
   * @param y
   * @param txConfig
   * @param callParams
   */
  setPubkey(ensName: string, x: string, y: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'ensName' | 'x' | 'y' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setPubkey(ensName, x, y, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setRecord
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param name
   * @param owner
   * @param resolver
   * @param ttl
   * @param txConfig
   * @param callParams
   */
  setRecord(name: string, owner: string, resolver: string, ttl: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'name' | 'owner' | 'resolver' | 'ttl' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setRecord(name, owner, resolver, ttl, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setResolver
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param name
   * @param address
   * @param txConfig
   * @param callParams
   */
  setResolver(name: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'name' | 'address' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setResolver(name, address, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setSubnodeOwner
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param name
   * @param label
   * @param address
   * @param txConfig
   * @param callParams
   */
  setSubnodeOwner(name: string, label: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'name' | 'label' | 'address' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setSubnodeOwner(name, label, address, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setSubnodeRecord
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param name
   * @param label
   * @param owner
   * @param resolver
   * @param ttl
   * @param txConfig
   * @param callParams
   */
  setSubnodeRecord(name: string, label: string, owner: string, resolver: string, ttl: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'name' | 'label' | 'owner' | 'resolver' | 'ttl' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setSubnodeRecord(name, label, owner, resolver, ttl, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  /**
   * wraps eth.ens.setTTL
   *
   * object values txConfig.common.baseChain and txConfig.common.hardfork require special strings
   *
   * @param name
   * @param ttl
   * @param txConfig
   * @param callParams
   */
  setTTL(name: string, ttl: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null, callParams: CallParams<'name' | 'ttl' | 'txConfig'>): { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number }> {
    return new Promise((res, rej) => {
      try {
        this.web3.eth.ens.setTTL(name, ttl, txConfig ? {
          ...txConfig,
          common: txConfig.common ? {
            ...txConfig.common,
            baseChain: txConfig.common.baseChain ? txConfig.common.baseChain as chain : null,
            hardfork: txConfig.common.hardfork ? txConfig.common.hardfork as hardfork : null
          } : null
        } : null, (error, receipt) => {
          if (receipt) {
            res({ ...receipt, contractAddress: receipt.contractAddress || null });
          } else {
            rej(error);
          }
        });
      } catch (e) {
        return e;
      }
    });
  }
  
  supportsInterface(name: string, interfaceId: string, callParams: CallParams<'name' | 'interfaceId'>): boolean | Promise<boolean> {
    return this.web3.eth.ens.supportsInterface(name, interfaceId);
  }
  
}
