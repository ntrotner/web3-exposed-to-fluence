import Web3js from 'web3';
import { ContractDef } from '../../compiled/Contract';
import { AbiType, StateMutabilityType } from 'web3-utils';
import { CallParams } from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';

/**
 * allows access to the contract module
 *
 * see https://web3js.readthedocs.io/en/v1.5.2/web3-eth-contract.html
 */
export class Contract implements ContractDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
  }
  
  /**
   * wraps eth.Contract.deploy.encodeABI
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings, else
   * the encoding will fail
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param deployOptions
   * @param callParams
   */
  deployEncodeABI(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, deployOptions: { arguments: string[] | null; data: string }, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'deployOptions'>): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).deploy(deployOptions).encodeABI();
  }
  
  /**
   * wraps eth.Contract.deploy.estimateGas
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings, else
   * the estimation will fail
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param deployOptions
   * @param gasOption
   * @param callParams
   */
  deployEstimateGas(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, deployOptions: { arguments: string[] | null; data: string }, gasOption: { from: string | null; gas: number | null; value: string | null } | null, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'deployOptions' | 'gasOption'>): number | Promise<number> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    
    return (new this.web3.eth.Contract(typedJSONInterface, address, options)).deploy(deployOptions).estimateGas(gasOption);
  }
  
  /**
   * wraps eth.Contract.deploy.send
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings, else
   * the actual deployment will fail
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param deployOptions
   * @param sendOptions
   * @param callParams
   */
  deploySend(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, deployOptions: { arguments: string[] | null; data: string }, sendOptions: { from: string; gas: number | null; gasPrice: string | null; nonce: number | null; value: string | null }, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'deployOptions' | 'sendOptions'>): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        let typedJSONInterface = jsonInterface.map((jsonI) => {
          return {
            ...jsonI,
            stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
            type: jsonI.type ? jsonI.type as AbiType : null
          };
        });
        
        let response = await (new this.web3.eth.Contract(typedJSONInterface, address, {
          ...options,
          data: options.data ? options.data : null
        }))
          .deploy(deployOptions)
          .send(sendOptions, (onerror, transactionHash) => {
            resolve(transactionHash);
          });
      } catch (e) {
        resolve(e);
      }
    });
  }
  
  
  /**
   * wraps eth.Contract.events.allEvents
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param eventOptions
   * @param callParams
   */
  async getAllEvents(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, eventOptions: { filter: string | null; fromBlock: string | null; toBlock: string | null; topics: string[] | null } | null, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'eventOptions'>): Promise<{ address: string; blockHash: string | null; blockNumber: number | null; event: string; logIndex: number; raw: { data: string; topics: string[] }; returnValues: string; signature: string | null; transactionHash: string; transactionIndex: number }[]> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    try {
      return await (new this.web3.eth.Contract(typedJSONInterface, address, options)).events.allEvents(eventOptions);
    } catch {
      return [];
    }
  }
  
  /**
   * wraps eth.Contract.events.getPastEvents
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param event
   * @param eventOptions
   * @param callParams
   */
  async getPastEvents(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, event: string, eventOptions: { filter: string | null; fromBlock: string | null; toBlock: string | null; topics: string[] | null } | null, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'event' | 'eventOptions'>): Promise<{ address: string; blockHash: string | null; blockNumber: number | null; event: string; logIndex: number; raw: { data: string; topics: string[] }; returnValues: string; signature: string | null; transactionHash: string; transactionIndex: number }[]> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    try {
      return await (new this.web3.eth.Contract(typedJSONInterface, address, options)).events.getPastEvents(eventOptions);
    } catch {
      return [];
    }
  }
  
  /**
   * wraps eth.Contract.methods[input].call
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings
   *
   * calling a method will fail if the methodName is invalid or the parameters aren't a stringified list
   * that can be parsed by the JSON.parse(...) function. Each element is then unwrapped and given
   * to the function call
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param methodName
   * @param parameters
   * @param callOptions
   * @param callParams
   */
  methodCall(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, callOptions: { from: string | null; gas: number | null; gasPrice: string | null } | null, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'methodName' | 'parameters' | 'callOptions'>): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    
    try {
      return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).call(callOptions);
    } catch (e) {
      return e;
    }
  }
  
  /**
   * wraps eth.Contract.methods[input].encodeABI
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings
   *
   * encoding the abi will fail if the methodName is invalid or the parameters aren't a stringified list
   * that can be parsed by the JSON.parse(...) function. Each element is then unwrapped and given
   * to the function call
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param methodName
   * @param parameters
   * @param callParams
   */
  methodEncodeABI(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'methodName' | 'parameters'>): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    
    try {
      return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).encodeABI();
    } catch (e) {
      return e;
    }
  }
  
  /**
   * wraps eth.Contract.methods[input].estimateGas
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings
   *
   * estimating the gas will fail if the methodName is invalid or the parameters aren't a stringified list
   * that can be parsed by the JSON.parse(...) function. Each element is then unwrapped and given
   * to the function call
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param methodName
   * @param parameters
   * @param estimateGasOptions
   * @param callParams
   */
  methodEstimateGas(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, estimateGasOptions: { from: string | null; gas: number | null; value: string | null } | null, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'methodName' | 'parameters' | 'estimateGasOptions'>): number | Promise<number> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    
    try {
      return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).estimateGas();
    } catch (e) {
      return e;
    }
  }
  
  /**
   * wraps eth.Contract.methods[input].call
   *
   * object jsonInterface.stateMutability and jsonInterface.type need special strings
   *
   * calling a method will fail if the methodName is invalid or the parameters aren't a stringified list
   * that can be parsed by the JSON.parse(...) function. Each element is then unwrapped and given
   * to the function call
   *
   * @param jsonInterface
   * @param address
   * @param options
   * @param methodName
   * @param parameters
   * @param sendOptions
   * @param callParams
   */
  methodSend(jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[], address: string | null, options: { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | null, methodName: string, parameters: string, sendOptions: { from: string; gas: number | null; gasPrice: string | null; nonce: number | null; value: string | null }, callParams: CallParams<'jsonInterface' | 'address' | 'options' | 'methodName' | 'parameters' | 'sendOptions'>): string | Promise<string> {
    let typedJSONInterface = jsonInterface.map((jsonI) => {
      return {
        ...jsonI,
        stateMutability: jsonI.stateMutability ? jsonI.stateMutability as StateMutabilityType : null,
        type: jsonI.type ? jsonI.type as AbiType : null
      };
    });
    
    try {
      return (new this.web3.eth.Contract(typedJSONInterface, address, options)).methods[methodName](...JSON.parse(parameters)).send(sendOptions);
    } catch (e) {
      return e;
    }
  }
}
