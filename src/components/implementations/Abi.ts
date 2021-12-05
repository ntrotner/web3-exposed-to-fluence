import Web3js from 'web3';
import { CallParams } from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';
import { AbiDef } from '../../compiled/Abi';
import { AbiType, StateMutabilityType } from 'web3-utils';

/**
 * allows access to ABI functionalities
 *
 * See https://web3js.readthedocs.io/en/v1.5.2/web3-eth-abi.html
 */
export class Abi implements AbiDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
  }
  
  /**
   * wraps web3.eth.abi.decodeLog
   *
   * returns logs in a stringified JSON format, as it's unclear what structure it will have at runtime
   *
   * @param inputs
   * @param hexString
   * @param topics
   * @param callParams
   */
  decodeLog(inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[], hexString: string, topics: string[], callParams: CallParams<'inputs' | 'hexString' | 'topics'>): string {
    let response = this.web3.eth.abi.decodeLog(inputs, hexString, topics);
    return JSON.stringify(response);
  }
  
  /**
   * wraps web3.eth.abi.decodeParameter
   *
   * returns object with keys and values that are unclear at the runtime
   *
   * @param type
   * @param hexString
   * @param callParams
   */
  decodeParameter(type: string, hexString: string, callParams: CallParams<'type' | 'hexString'>): string {
    let response = this.web3.eth.abi.decodeParameter(type, hexString);
    return JSON.stringify(response);
  }
  
  /**
   * wraps web3.eth.abi.decodeParameters
   *
   * returns object with keys and values that are unclear at the runtime
   *
   * @param typesArray
   * @param hexString
   * @param callParams
   */
  decodeParameters(typesArray: string[], hexString: string, callParams: CallParams<'typesArray' | 'hexString'>): string {
    let response = this.web3.eth.abi.decodeParameters(typesArray, hexString);
    return JSON.stringify(response);
  }
  
  encodeEventSignature(eventName: string, callParams: CallParams<'eventName'>): string {
    return this.web3.eth.abi.encodeEventSignature(eventName);
  }
  
  encodeFunctionCall(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string; }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string; }[] | null; payable: boolean | null; stateMutability: string | null; type: string; }, parameters: string[], callParams: CallParams<'jsonInterface' | 'parameters'>): string {
    return this.web3.eth.abi.encodeFunctionCall({
      ...jsonInterface,
      stateMutability: jsonInterface.stateMutability ? jsonInterface.stateMutability as StateMutabilityType : null,
      type: jsonInterface.type ? jsonInterface.type as AbiType : null
    }, parameters);
  }
  
  encodeFunctionSignature(functionName: string, callParams: CallParams<'functionName'>): string {
    return this.web3.eth.abi.encodeFunctionSignature(functionName);
  }
  
  encodeParameter(type: string, parameter: string, callParams: CallParams<'type' | 'parameter'>): string {
    return this.web3.eth.abi.encodeParameter(type, parameter);
  }
  
  encodeParameters(typesArray: string[], parameters: string[], callParams: CallParams<'typesArray' | 'parameters'>): string | Promise<string> {
    return this.web3.eth.abi.encodeParameters(typesArray, parameters);
  }
}
