import Web3js from 'web3';
import { BzzDef } from '../../compiled/Bzz';
import { CallParams } from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';
import { settings } from '../../../settings';

/**
 * allows access to the Bzz module
 *
 * see https://web3js.readthedocs.io/en/v1.5.2/web3-bzz.html
 */
export class Bzz implements BzzDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
    this.web3.bzz.setProvider(settings.web3.provider);
  }
  
  /**
   * wraps bzz.download
   *
   * if the user knows that it is a parsable object/array, then
   * this method can be used to receive an stringified JSON
   *
   * @param bzzHash
   * @param callParams
   */
  async downloadObject(bzzHash: string, callParams: CallParams<'bzzHash'>): Promise<string> {
    let response = await this.web3.bzz.download(bzzHash);
    return JSON.stringify(response);
  }
  
  /**
   * wraps bzz.download
   *
   * returns the downloaded content as a string
   * should the return type be a JSON object, then see the downloadObject function
   *
   * @param bzzHash
   * @param callParams
   */
  async downloadString(bzzHash: string, callParams: CallParams<'bzzHash'>): Promise<string> {
    let response = await this.web3.bzz.download(bzzHash);
    return String(response);
  }
  
  /**
   * wraps bzz.upload
   *
   * input is a stringified JSON object/array/type, which will be parsed and uploaded
   *
   * @param input
   * @param callParams
   */
  async uploadObject(input: string, callParams: CallParams<'input'>): Promise<string> {
    let parsedObject = JSON.parse(input);
    return await this.web3.bzz.upload(parsedObject);
  }
  
  /**
   * wraps bzz.upload
   *
   * uploads a plain string
   * if the input is an JSON element, then see uploadObject
   *
   * @param input
   * @param callParams
   */
  uploadString(input: string, callParams: CallParams<'input'>): string | Promise<string> {
    return this.web3.bzz.upload(input);
  }
  
  /**
   * wraps bzz.upload
   *
   * uploads an array of bytes
   *
   * @param input
   * @param callParams
   */
  uploadU8Array(input: number[], callParams: CallParams<'input'>): string | Promise<string> {
    return this.web3.bzz.upload(input);
  }
}
