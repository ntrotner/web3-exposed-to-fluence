import Web3js from 'web3';
import { PersonalDef } from '../../compiled/Personal';
import { CallParams } from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';
import { chain, hardfork } from 'web3-core';

/**
 * allows access to the Personal module
 *
 * see https://web3js.readthedocs.io/en/v1.5.2/web3-eth-personal.html
 */
export class Personal implements PersonalDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
  }
  
  ecRecover(dataThatWasSigned: string, signature: string, callParams: CallParams<'dataThatWasSigned' | 'signature'>): string | Promise<string> {
    return this.web3.eth.personal.ecRecover(dataThatWasSigned, signature);
  }
  
  getAccounts(callParams: CallParams<null>): string[] | Promise<string[]> {
    return this.web3.eth.personal.getAccounts();
  }
  
  importRawKey(privateKey: string, password: string, callParams: CallParams<'privateKey' | 'password'>): string | Promise<string> {
    return this.web3.eth.personal.importRawKey(privateKey, password);
  }
  
  lockAccount(address: string, callParams: CallParams<'address'>): boolean | Promise<boolean> {
    return this.web3.eth.personal.lockAccount(address);
  }
  
  newAccount(password: string, callParams: CallParams<'password'>): string | Promise<string> {
    return this.web3.eth.personal.newAccount(password);
  }
  
  sign(dataToSign: string, address: string, password: string, callParams: CallParams<'dataToSign' | 'address' | 'password'>): string | Promise<string> {
    return this.web3.eth.personal.sign(dataToSign, address, password);
  }
  
  /**
   * wraps eth.personal.sendTransaction
   *
   * object values common.baseChain and common.hardfork require special strings, else
   * the transaction may be lost and the funds at risk
   *
   * @param transactionOptions
   * @param password
   * @param callParams
   */
  sendTransaction(transactionOptions: { chain: string | null; chainId: number | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null } | null; data: string | null; from: string | null; gas: number | null; gasPrice: number | null; hardfork: string | null; nonce: number | null; to: string | null; value: string | null }, password: string, callParams: CallParams<'transactionOptions' | 'password'>): string | Promise<string> {
    return this.web3.eth.personal.sendTransaction({
      ...transactionOptions,
      common: transactionOptions.common ? {
        ...transactionOptions.common,
        baseChain: transactionOptions.common.baseChain ? transactionOptions.common.baseChain as chain : null,
        hardfork: transactionOptions.common.hardfork ? transactionOptions.common.hardfork as hardfork : null
      } : null
    }, password);
  }
  
  /**
   * wraps eth.personal.signTransaction
   *
   * object values common.baseChain and common.hardfork require special strings, else
   * the transaction may be lost and the funds at risk
   *
   * @param transaction
   * @param password
   * @param callParams
   */
  signTransaction(transaction: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null }, password: string, callParams: CallParams<'transaction' | 'password'>): { raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } } | Promise<{ raw: string; tx: { gas: string; gasPrice: string; hash: string; input: string; nonce: string; r: string; s: string; to: string; v: string; value: string } }> {
    return this.web3.eth.personal.signTransaction({
      ...transaction,
      common: transaction.common ? {
        ...transaction.common,
        baseChain: transaction.common.baseChain ? transaction.common.baseChain as chain : null,
        hardfork: transaction.common.hardfork ? transaction.common.hardfork as hardfork : null
      } : null
    }, password);
  }
  
  unlockAccount(address: string, password: string, unlockDuration: number, callParams: CallParams<'address' | 'password' | 'unlockDuration'>): boolean | Promise<boolean> {
    return this.web3.eth.personal.unlockAccount(address, password, unlockDuration);
  }
  
}
