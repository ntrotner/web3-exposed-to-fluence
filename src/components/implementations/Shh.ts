import { settings } from "../../../settings";
import Web3js from "web3";
import { ShhDef } from "../../compiled/Shh";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";

export class Shh implements ShhDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
    this.web3.shh.setProvider(settings.web3.provider)
  }
  
  addPrivateKey(privateKey: string, callParams: CallParams<"privateKey">): string | Promise<string> {
    return this.web3.shh.addPrivateKey(privateKey);
  }
  
  addSymKey(symKey: string, callParams: CallParams<"symKey">): string | Promise<string> {
    return this.web3.shh.addSymKey(symKey);
  }
  
  deleteKeyPair(id: string, callParams: CallParams<"id">): boolean | Promise<boolean> {
    return this.web3.shh.deleteKeyPair(id);
  }
  
  deleteMessageFilter(id: string, callParams: CallParams<"id">): boolean | Promise<boolean> {
    return this.web3.shh.deleteMessageFilter(id);
  }
  
  deleteSymKey(id: string, callParams: CallParams<"id">): boolean | Promise<boolean> {
    return this.web3.shh.deleteSymKey(id);
  }
  
  generateSymKeyFromPassword(password: string, callParams: CallParams<"password">): string | Promise<string | null> | null {
    return this.web3.shh.generateSymKeyFromPassword(password);
  }
  
  async getFilterMessage(id: string, callParams: CallParams<"id">): Promise<{ hash: string; padding: number; payload: string; pow: number; recipientPublicKey: string; sig: string; timestamp: string; topic: string; ttl: number }[]> {
    let response = await this.web3.shh.getFilterMessages(id);
    return response.map((notification) => {
      return {
        ...notification,
        sig: notification.sig || null,
        recipientPublicKey: notification.recipientPublicKey || null
      }
    })
  }
  
  getInfo(callParams: CallParams<null>): { maxMessageSize: number; memory: number; messages: number; minPow: number } | Promise<{ maxMessageSize: number; memory: number; messages: number; minPow: number }> {
    return this.web3.shh.getInfo();
  }
  
  getPeerCount(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.shh.net.getPeerCount();
  }
  
  getPrivateKey(id: string, callParams: CallParams<"id">): string | Promise<string> {
    return this.web3.shh.getPrivateKey(id);
  }
  
  getPublicKey(id: string, callParams: CallParams<"id">): string | Promise<string> {
    return this.web3.shh.getPublicKey(id);
  }
  
  getSymKey(id: string, callParams: CallParams<"id">): string | Promise<string> {
    return this.web3.shh.getSymKey(id);
  }
  
  getVersion(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.shh.getVersion();
  }
  
  hasKeyPair(id: string, callParams: CallParams<"id">): boolean | Promise<boolean> {
    return this.web3.shh.hasKeyPair(id);
  }
  
  hasSymKey(id: string, callParams: CallParams<"id">): boolean | Promise<boolean> {
    return this.web3.shh.hasSymKey(id);
  }
  
  isListening(callParams: CallParams<null>): boolean | Promise<boolean> {
    return this.web3.shh.net.isListening();
  }
  
  markTrustedPeer(enode: string, callParams: CallParams<"enode">): boolean | Promise<boolean> {
    return this.web3.shh.markTrustedPeer(enode);
  }
  
  newKeyPair(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.shh.newKeyPair();
  }
  
  newMessageFilter(options: { allowP2P: boolean | null; minPow: number | null; privateKeyID: string; sig: string | null; symKeyID: string; topics: string[] }, callParams: CallParams<"options">): string | Promise<string> {
    return this.web3.shh.newMessageFilter(options);
  }
  
  newSymKey(callParams: CallParams<null>): string | Promise<string> {
    return this.web3.shh.newSymKey();
  }
  
  post(object: { padding: number | null; payload: string; powTarget: number | null; powTime: number | null; pubKey: string | null; sig: string | null; symKeyID: string | null; targetPeer: number | null; topic: string; ttl: number }, callParams: CallParams<"object">): string | Promise<string> {
    return this.web3.shh.post(object);
  }
  
  setMaxMessageSize(size: number, callParams: CallParams<"size">): boolean | Promise<boolean> {
    return this.web3.shh.setMaxMessageSize(size);
  }
  
  setMinPoW(pow: number, callParams: CallParams<"pow">): boolean | Promise<boolean> {
    return this.web3.shh.setMinPoW(pow);
  }
  
  getId(callParams: CallParams<null>): number | Promise<number> {
    return this.web3.shh.net.getId();
  }
}
