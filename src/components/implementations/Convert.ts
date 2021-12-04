import { ConvertDef } from "../../compiled/Convert";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";

export class Convert implements ConvertDef {
  strTou64(input: string): number[] | Promise<number[]> {
    let parsed = JSON.parse(input)
    try {
      if (!!parsed && parsed.length) {
        let result = []
        for (const i of parsed) {
          result.push(parseInt(i))
        }
        return result
      } else {
        return []
      }
    } catch {
      return []
    }
  }
  
  getCallObject(callParams: CallParams<null>): { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } {
    return {
      accessList: null,
      chain: null,
      common: { baseChain: null, customChain: { chainId: 1, name: null, networkId: 1 }, hardfork: null },
      from: "0x00000000219ab540356cbb839cbe05303d7705fa",
      gas: null,
      gasPrice: null,
      hardfork: null,
      maxFeePerGas: null,
      maxPriorityFeePerGas: null,
      nonce: null,
      type: null,
      value: null,
      to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
      data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
    }
  }
  
  getEstimateGasObject(callParams: CallParams<null>): { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } {
    return {
      accessList: null,
      chain: null,
      common: { baseChain: null, customChain: { chainId: 1, name: null, networkId: 1 }, hardfork: null },
      from: "0x00000000219ab540356cbb839cbe05303d7705fa",
      gas: null,
      gasPrice: null,
      hardfork: null,
      maxFeePerGas: null,
      maxPriorityFeePerGas: null,
      nonce: null,
      type: null,
      value: null,
      to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
      data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
    };
  }
  
  getPastLogsObject(callParams: CallParams<null>): { address: string; fromBlock: string; toBlock: string; topics: string[] } | Promise<{ address: string; fromBlock: string; toBlock: string; topics: string[] }> {
    return {
      fromBlock: "13722000",
      toBlock: "13722790",
      address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
      topics: ["0xb90ba307cebab816465a3f1a5df8dfe7cea31d0339ab900fbea28e199af66afc"]
    };
  }
  
  getProofArray(callParams: CallParams<null>): string[] | Promise<string[]> {
    return ["0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000000000000000000000000001"];
  }
  
  getTransactionToSignObject(callParams: CallParams<null>): { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } {
    return {
      accessList: null,
      chain: null,
      common: { baseChain: null, customChain: { chainId: 1, name: null, networkId: 1 }, hardfork: null },
      hardfork: null,
      maxFeePerGas: null,
      maxPriorityFeePerGas: null,
      nonce: 1,
      type: null,
      from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
      gasPrice: "20000000000",
      gas: 21000,
      to: '0x3535353535353535353535353535353535353535',
      value: "1000000000000000000",
      data: ""
    };
  }
  
  getWorkArray(callParams: CallParams<null>): string[] {
    return ["0x0000000000000001", "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"];
  }
  
  getBytesToHex(callParams: CallParams<null>): number[] | Promise<number[]> {
    return [72, 101, 108, 108, 111, 33, 36];
  }
  
  getSoliditySha3Array(callParams: CallParams<null>): string[] | Promise<string[]> {
    return ["hello", "world"];
  }
  
  getTypedSoliditySha3Array(callParams: CallParams<null>): { type: string; value: string }[] | Promise<{ type: string; value: string }[]> {
    return [
      { type: 'uint256', value: '234' },
      { type: 'bytes', value: '0x407D73d8a49eeb85D32Cf465507dd71d507100c1' },
      { type: 'string', value: 'helloworld' }
    ];
  }
  
  getUploadObject(callParams: CallParams<null>): string | Promise<string> {
    return JSON.stringify({ "hello": "world" });
  }
  
  getABIItem(callParams: CallParams<null>): { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[] | Promise<{ anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[]> {
    return [{
      "anonymous": null,
      "gas": null,
      "constant": true,
      "inputs": [],
      "name": "testFunc",
      "outputs": [{ "name": "", "type": "int256", "internalType": null }],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }]
  }
  
  getCallOptions(callParams: CallParams<null>): { from: string | null; gas: number | null; gasPrice: string | null } | Promise<{ from: string | null; gas: number | null; gasPrice: string | null }> {
    return {
      from: "0xC66f1507A8c9522E8742f32C36D462173d01510A",
      gas: 1000,
      gasPrice: "300000000000000"
    };
  }
  
  getContractOptions(callParams: CallParams<null>): { data: string | null; from: string | null; gas: number | null; gasPrice: string | null } | Promise<{ data: string | null; from: string | null; gas: number | null; gasPrice: string | null }> {
    return {
      data: "f311",
      from: "0xC66f1507A8c9522E8742f32C36D462173d01510A",
      gas: 1000,
      gasPrice: "300000000000000"
    };
  }
  
  getDeployOptions(callParams: CallParams<null>): { arguments: string[] | null; data: string } | Promise<{ arguments: string[] | null; data: string }> {
    return { data: "f311", arguments: null }
  }
  
  getEstimateGasOptions(callParams: CallParams<null>): { from: string | null; gas: number | null; value: string | null } | Promise<{ from: string | null; gas: number | null; value: string | null }> {
    return {
      from: "0xC66f1507A8c9522E8742f32C36D462173d01510A",
      gas: 1000,
      value: null
    };
  }
  
  getEventOptions(callParams: CallParams<null>): { filter: string | null; fromBlock: string | null; toBlock: string | null; topics: string[] | null } | null | Promise<{ filter: string | null; fromBlock: string | null; toBlock: string | null; topics: string[] | null } | null> {
    return {
      filter: JSON.stringify({ myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789' }),
      fromBlock: "0",
      toBlock: 'latest',
      topics: null
    };
  }
  
  getSendOptions(callParams: CallParams<null>): { from: string; gas: number | null; gasPrice: string | null; nonce: number | null; value: string | null } | null | Promise<{ from: string; gas: number | null; gasPrice: string | null; nonce: number | null; value: string | null } | null> {
    return {
      from: "0xC66f1507A8c9522E8742f32C36D462173d01510A",
      gas: 15000000,
      gasPrice: "300000000000000",
      nonce: null,
      value: null
    };
  }
  
  getIndirectOptions(callParams: CallParams<null>): { identifier: string; institution: string } | Promise<{ identifier: string; institution: string }> {
    return {
      institution: "XREG",
      identifier: "GAVOFYORK"
    };
  }
  
}

