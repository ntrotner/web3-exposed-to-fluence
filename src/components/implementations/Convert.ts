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
  
}

