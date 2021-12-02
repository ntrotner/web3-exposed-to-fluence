import Web3js from 'web3'
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";
import { AbiDef } from "../../compiled/Abi";

export class Abi implements AbiDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  decodeLog(inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[], hexString: string, topics: string[], callParams: CallParams<"inputs" | "hexString" | "topics">): string {
    let response = this.web3.eth.abi.decodeLog(inputs, hexString, topics);
    return JSON.stringify(response)
  }
  
  decodeParameter(type: string, hexString: string, callParams: CallParams<"type" | "hexString">): string {
    let response = this.web3.eth.abi.decodeParameter(type, hexString);
    return JSON.stringify(response)
  }
  
  decodeParameters(typesArray: string[], hexString: string, callParams: CallParams<"typesArray" | "hexString">): string {
    let response = this.web3.eth.abi.decodeParameters(typesArray, hexString);
    return JSON.stringify(response)
  }
  
  encodeEventSignature(eventName: string, callParams: CallParams<"eventName">): string {
    return this.web3.eth.abi.encodeEventSignature(eventName);
  }
  
  encodeFunctionCall(jsonInterface: string, parameters: string[], callParams: CallParams<"jsonInterface" | "parameters">): string {
    return this.web3.eth.abi.encodeFunctionCall(JSON.parse(jsonInterface), parameters);
  }
  
  encodeFunctionSignature(functionName: string, callParams: CallParams<"functionName">): string {
    let response = this.web3.eth.abi.encodeFunctionSignature(functionName);
    return JSON.stringify(response)
  }
  
  encodeParameter(type: string, parameter: string, callParams: CallParams<"type" | "parameter">): string {
    let response = this.web3.eth.abi.encodeParameter(type, parameter);
    return JSON.stringify(response)
  }
  
  encodeParameters(typesArray: string[], parameters: string[], callParams: CallParams<"typesArray" | "parameters">): string | Promise<string> {
    return this.web3.eth.abi.encodeParameters(typesArray, parameters);
  }
}
