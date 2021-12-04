import Web3js from 'web3'
import { BzzDef } from "../../compiled/Bzz";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";
import { settings } from "../../../settings";

export class Bzz implements BzzDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
    this.web3.bzz.setProvider(settings.web3.provider)
  }
  
  async downloadObject(bzzHash: string, callParams: CallParams<"bzzHash">): Promise<string> {
    let response = await this.web3.bzz.download(bzzHash);
    return JSON.stringify(response);
  }
  
  async downloadString(bzzHash: string, callParams: CallParams<"bzzHash">): Promise<string> {
    let response = await this.web3.bzz.download(bzzHash);
    return String(response);
  }
  
  uploadObject(input: string, callParams: CallParams<"input">): string | Promise<string> {
    let parsedObject = JSON.parse(input)
    return this.web3.bzz.upload(parsedObject);
  }
  
  uploadString(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.bzz.upload(input);
  }
  
  uploadU8Array(input: number[], callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.bzz.upload(input);
  }
}
