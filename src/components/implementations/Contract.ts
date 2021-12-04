import Web3js from "web3";
import { ContractDef } from "../../compiled/Contract";
import { AbiType, StateMutabilityType } from "web3-utils";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";

export class Contract implements ContractDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  deployEncodeABI(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, deployOptions: { arguments: string[] | null; data: string }, callParams: CallParams<"jsonInterface" | "address" | "options" | "deployOptions">): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).deploy(deployOptions).encodeABI();
  }
  
  deployEstimateGas(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, deployOptions: { arguments: string[] | null; data: string }, gasOption: { from: string | null; gas: number | null; value: string | null } | null, callParams: CallParams<"jsonInterface" | "address" | "options" | "deployOptions" | "gasOption">): number | Promise<number> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).deploy(deployOptions).estimateGas();
  }
  
  deploySend(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, deployOptions: { arguments: string[] | null; data: string }, sendOptions: { from: string; gas: number | null; gasPrice: string | null; nonce: number | null; value: string | null }, callParams: CallParams<"jsonInterface" | "address" | "options" | "deployOptions" | "sendOptions">): Promise<string> {
    return new Promise(async (resolve, reject) => {
      let typedJSONInterface = jsonInterface.map((jsonI) => {
        return {
          ...jsonI,
          stateMutability: jsonI.stateMutability as StateMutabilityType,
          type: jsonI.type as AbiType
        }
      })
      
      let response = await (new this.web3.eth.Contract(typedJSONInterface, address, { ...options, data: options.data ? options.data : "" }))
        .deploy(deployOptions)
        .send(sendOptions, (onerror, transactionHash) => {
          resolve(transactionHash)
        });
    })
  }
  
  async getAllEvents(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, eventOptions: { filter: string | null; fromBlock: string | null; toBlock: string | null; topics: string[] | null } | null, callParams: CallParams<"jsonInterface" | "address" | "options" | "eventOptions">): Promise<{ address: string; blockHash: string | null; blockNumber: number | null; event: string; logIndex: number; raw: { data: string; topics: string[] }; returnValues: string; signature: string | null; transactionHash: string; transactionIndex: number }[]> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    try {
      return await (new this.web3.eth.Contract(typedJSONInterface, address, options)).events.allEvents(eventOptions)
    } catch {
      return []
    }
  }
  
  async getPastEvents(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, event: string, eventOptions: { filter: string | null; fromBlock: string | null; toBlock: string | null; topics: string[] | null } | null, callParams: CallParams<"jsonInterface" | "address" | "options" | "event" | "eventOptions">): Promise<{ address: string; blockHash: string | null; blockNumber: number | null; event: string; logIndex: number; raw: { data: string; topics: string[] }; returnValues: string; signature: string | null; transactionHash: string; transactionIndex: number }[]> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    try {
      return await (new this.web3.eth.Contract(typedJSONInterface, address, options)).events.getPastEvents(eventOptions)
    } catch {
      return []
    }
  }
  
  methodCall(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, callOptions: { from: string | null; gas: number | null; gasPrice: string | null } | null, callParams: CallParams<"jsonInterface" | "address" | "options" | "methodName" | "parameters" | "callOptions">): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).call(callOptions)
  }
  
  methodEncodeABI(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, callParams: CallParams<"jsonInterface" | "address" | "options" | "methodName" | "parameters">): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).encodeABI()
  }
  
  methodEstimateGas(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, estimateGasOptions: { from: string | null; gas: number | null; value: string | null } | null, callParams: CallParams<"jsonInterface" | "address" | "options" | "methodName" | "parameters" | "estimateGasOptions">): number | Promise<number> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).estimateGas()
  }
  
  methodSend(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, sendOptions: { from: string; gas: number | null; gasPrice: string | null; nonce: number | null; value: string | null }, callParams: CallParams<"jsonInterface" | "address" | "options" | "methodName" | "parameters" | "sendOptions">): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability as StateMutabilityType,
        type: jsonI.type as AbiType
      }
    })
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).send(sendOptions)
  }
}
