import Web3js from 'web3'
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";
import { AccountsDef } from "../../compiled/Accounts";
import { chain, hardfork } from "web3-core";

export class Accounts implements AccountsDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  create(entropy: string | null, callParams: CallParams<"entropy">): { address: string; privateKey: string } | Promise<{ address: string; privateKey: string }> {
    return this.web3.eth.accounts.create(entropy);
  }
  
  decrypt(keystoreJsonV3: { address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number }, password: string, callParams: CallParams<"keystoreJsonV3" | "password">): { address: string; privateKey: string } | Promise<{ address: string; privateKey: string }> {
    return this.web3.eth.accounts.decrypt(keystoreJsonV3, password);
  }
  
  encrypt(privateKey: string, password: string, callParams: CallParams<"privateKey" | "password">): { address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number } | Promise<{ address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number }> {
    return this.web3.eth.accounts.encrypt(privateKey, password);
  }
  
  hashMessage(message: string, callParams: CallParams<"message">): string | Promise<string> {
    return this.web3.eth.accounts.hashMessage(message);
  }
  
  privateKeyToAccount(privateKey: string, ignoreLength: boolean | null, callParams: CallParams<"privateKey" | "ignoreLength">): { address: string; privateKey: string } | Promise<{ address: string; privateKey: string }> {
    return this.web3.eth.accounts.privateKeyToAccount(privateKey, ignoreLength);
  }
  
  recover(message: string, signature: string, preFixed: boolean | null, callParams: CallParams<"message" | "signature" | "preFixed">): string | Promise<string> {
    return this.web3.eth.accounts.recover(message, signature, preFixed);
  }
  
  recoverTransaction(signature: string, callParams: CallParams<"signature">): string | Promise<string> {
    return this.web3.eth.accounts.recoverTransaction(signature);
  }
  
  recoverWithSignatureObject(signature: { messageHash: string; r: string; s: string; v: string }, callParams: CallParams<"signature">): string | Promise<string> {
    return this.web3.eth.accounts.recover(signature);
  }
  
  async signTransaction(tx: { chain: string | null; chainId: number | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null } | null; data: string | null; from: string | null; gas: number | null; gasPrice: number | null; hardfork: string | null; nonce: number | null; to: string | null; value: string | null }, privateKey: string, callParams: CallParams<"tx" | "privateKey">): Promise<{ messageHash: string | null; r: string; rawTransaction: string | null; s: string; transactionHash: string | null; v: string }> {
    let baseChain = tx.common.baseChain as chain
    let hardfork = tx.common.hardfork as hardfork
    
    let response = await this.web3.eth.accounts.signTransaction({
      ...tx,
      common: { ...tx.common, baseChain, hardfork }
    }, privateKey);
    
    return {
      ...response,
      messageHash: response.messageHash || null,
      rawTransaction: response.rawTransaction || null,
      transactionHash: response.transactionHash || null
    }
  }
  
  async wallet(callParams: CallParams<null>): Promise<{ address: string; privateKey: string }[]> {
    let allAccounts = await this.web3.eth.getAccounts();
    let response = await this.web3.eth.accounts.wallet;
    return allAccounts.map((account) => {
      return { address: account, privateKey: response[account].privateKey }
    })
  }
  
  walletAdd(privateKey: string, callParams: CallParams<"privateKey">): { address: string; privateKey: string } | Promise<{ address: string; privateKey: string }> {
    return this.web3.eth.accounts.wallet.add(privateKey);
  }
  
  async walletClear(callParams: CallParams<null>): Promise<{ address: string; privateKey: string }[]> {
    let allAccounts = await this.wallet(null);
    await this.web3.eth.accounts.wallet.clear()
    return allAccounts;
  }
  
  async walletCreate(numberOfAccounts: number, entropy: string, callParams: CallParams<"numberOfAccounts" | "entropy">): Promise<{ address: string; privateKey: string }[]> {
    let response = await this.web3.eth.accounts.wallet.create(numberOfAccounts, entropy);
    return await this.wallet(null);
  }
  
  walletEncrypt(password: string, callParams: CallParams<"password">): { address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number }[] | Promise<{ address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number }[]> {
    return this.web3.eth.accounts.wallet.encrypt(password);
  }
  
  walletRemove(address: string, callParams: CallParams<"address">): boolean | Promise<boolean> {
    return this.web3.eth.accounts.wallet.remove(address);
  }
  
  async sign(data: string, privatekey: string, callParams: CallParams<"data" | "privatekey">): Promise<{ message: string; messageHash: string | null; r: string; rawTransaction: string | null; s: string; signature: string; transactionHash: string | null; v: string }> {
    let response = await this.web3.eth.accounts.sign(data, privatekey);
    return {
      ...response,
      messageHash: response.messageHash || null,
      rawTransaction: response.rawTransaction || null,
      transactionHash: response.transactionHash || null
    }
  }
  
  async walletDecrypt(keystoreArray: { address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number }[], password: string, callParams: CallParams<"keystoreArray" | "password">): Promise<{ address: string; privateKey: string }[]> {
    await this.web3.eth.accounts.wallet.decrypt(keystoreArray, password);
    return await this.wallet(null)
  }
  
}