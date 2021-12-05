import { ConvertDef } from "../../compiled/Convert";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";
import Web3js from "web3";
import { settings } from "../../../settings";

export class Convert implements ConvertDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
    this.web3.shh.setProvider(settings.web3.provider)
  }
  
  async getPostObject(callParams: CallParams<null>): Promise<{ padding: number; payload: string; powTarget: number; powTime: number; pubKey: string; sig: string; symKeyID: string; targetPeer: number; topic: string; ttl: number; }> {
    let symKey = await this.web3.shh.newSymKey()
    let keyPair = await this.web3.shh.newKeyPair()
    return {
      symKeyID: symKey,
      sig: keyPair,
      ttl: 10,
      topic: '0xffaadd11',
      payload: '0xffffffdddddd1122',
      powTime: 3,
      padding: 0,
      pubKey: "",
      targetPeer: 0,
      powTarget: 0.5
    }
  }
  
  getSubscribeOptions(callParams: CallParams<null>): { allowP2P: boolean; minPow: number; privateKeyID: string; sig: string; symKeyID: string; topics: string[]; } {
    return {
      allowP2P: false,
      privateKeyID: "",
      symKeyID: 'bf31b9ffc2387e18636e0a3d0c56b023264c16e78a2adcba1303cefc685e610f',
      sig: '0x04d1574d4eab8f3dde4d2dc7ed2c4d699d77cbbdd09167b8fffa099652ce4df00c4c6e0263eafe05007a46fdf0c8d32b11aeabcd3abbc7b2bc2bb967368a68e9c6',
      topics: ['0xffddaa11'],
      minPow: 0.8
    }
  }
  
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
      gas: 999,
      gasPrice: "300000000000000"
    };
  }
  
  getDeployOptions(callParams: CallParams<null>): { arguments: string[] | null; data: string } | Promise<{ arguments: string[] | null; data: string }> {
    return { data: "f311", arguments: null }
  }
  
  getEstimateGasOptions(callParams: CallParams<null>): { from: string | null; gas: number | null; value: string | null } | Promise<{ from: string | null; gas: number | null; value: string | null }> {
    return {
      from: "0xC66f1507A8c9522E8742f32C36D462173d01510A",
      gas: 999,
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
  
  getDecodeLogArray(callParams: CallParams<null>): { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | Promise<{ indexed: boolean | null; internalType: string | null; name: string; type: string }[]> {
    return [
      { indexed: true, internalType: null, name: "number1", type: "uint256" },
      { indexed: null, internalType: null, name: "number2", type: "uint8" }
    ];
  }
  
  getEncodeFunctionCallJSONInterface(callParams: CallParams<null>): { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string } {
    return {
      anonymous: null,
      constant: null,
      gas: null,
      outputs: null,
      payable: null,
      stateMutability: null,
      name: 'myMethod',
      type: 'function',
      inputs: [{
        type: 'uint256',
        name: 'myNumber',
        indexed: null,
        internalType: null
      }, {
        type: 'string',
        name: 'myString',
        indexed: null,
        internalType: null
      }]
    }
  }
  
  toStringArray(input: string, callParams: CallParams<"input">): string[] {
    input = input.replace(/'/g, '"')
    return (JSON.parse(input) as Array<any>).map((item) => {
      return String(item)
    });
  }
  
  getTransactionOptions(callParams: CallParams<null>): { chain: string | null; chainId: number | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; } | null; data: string | null; from: string | null; gas: number | null; gasPrice: number | null; hardfork: string | null; nonce: number | null; to: string | null; value: string | null; } {
    return {
      chain: undefined, chainId: undefined, common: undefined, hardfork: undefined, nonce: undefined,
      from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
      gasPrice: 20000000000,
      gas: 21000,
      to: '0x3535353535353535353535353535353535353535',
      value: "1000000000000000000",
      data: ""
    }
  }
  
  getDecryptEncryptedKeystoreV3(callParams: CallParams<null>): { address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number }[] {
    return [
      {
        version: 3,
        id: '83191a81-aaca-451f-b63d-0c5f3b849289',
        address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
        crypto:
          {
            ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
            cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
            cipher: 'aes-128-ctr',
            kdf: 'scrypt',
            kdfparams:
              {
                dklen: 32,
                salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
                n: 262144,
                r: 8,
                p: 1
              },
            mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9'
          }
      },
      {
        version: 3,
        id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
        address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
        crypto:
          {
            ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
            cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
            cipher: 'aes-128-ctr',
            kdf: 'scrypt',
            kdfparams:
              {
                dklen: 32,
                salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
                n: 262144,
                r: 8,
                p: 1
              },
            mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0'
          }
      }
    ]
  }
  
  getEncryptedKeystoreV3(callParams: CallParams<null>): { address: string; crypto: { cipher: string; cipherparams: { iv: string }; ciphertext: string; kdf: string; kdfparams: { dklen: number; n: number; p: number; r: number; salt: string }; mac: string }; id: string; version: number } {
    return {
      "address": "c66f1507a8c9522e8742f32c36d462173d01510a",
      "crypto": {
        "cipher": "aes-128-ctr",
        "cipherparams": {
          "iv": "659ae31fc9baeb5ea81227732b26c753"
        },
        "ciphertext": "a1362f90c652d5868336bb67640a1e15faf31714fe3ba5b720067e44a96c49dd",
        "kdf": "scrypt",
        "kdfparams": {
          "dklen": 32,
          "n": 8192,
          "p": 1,
          "r": 8,
          "salt": "54dcd07328fb85b070d765ba494d1b44b5fb59bebe494309ba686963964e9ca3"
        },
        "mac": "5aae37f19bf9e0fc40facbb329ecccd4d795a54a8677c54ee2e374ba2270d236"
      },
      "id": "c99ae35a-5143-4cf5-bc54-8aea86f69226",
      "version": 3
    }
  }
  
  getSignatureData(callParams: CallParams<null>): { messageHash: string; r: string; s: string; v: string } | Promise<{ messageHash: string; r: string; s: string; v: string }> {
    return {
      messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
      v: '0x1c',
      r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
      s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029'
    };
  }
  
  getOptionalString(input: string, callParams: CallParams<"input">): string | Promise<string | null> | null {
    return input;
  }
  
  getOptionalBool(input: boolean, callParams: CallParams<"input">): boolean | Promise<boolean> {
    return input
  }
  
  getSetResolversTransaction(callParams: CallParams<null>): { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number }; hardfork: string | null }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null } | null {
    return {
      accessList: undefined,
      chain: undefined,
      common: { baseChain: undefined, customChain: { chainId: 0, name: undefined, networkId: 0 }, hardfork: undefined },
      data: undefined,
      gas: undefined,
      gasPrice: undefined,
      hardfork: undefined,
      maxFeePerGas: undefined,
      maxPriorityFeePerGas: undefined,
      nonce: undefined,
      to: undefined,
      type: undefined,
      value: undefined,
      from: "0xC66f1507A8c9522E8742f32C36D462173d01510A"
    }
  }
  
  getABIItemRopsten(callParams: CallParams<null>): { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[] | Promise<{ anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string }[] | null; payable: boolean | null; stateMutability: string | null; type: string }[]> {
    return [{
      "inputs": [{
        "internalType": "contract ValidatorRegistry",
        "name": "_validatorRegistry",
        "type": "address"
      }, {
        "internalType": "contract SimplifiedMMRVerification",
        "name": "_mmrVerification",
        "type": "address"
      }, { "internalType": "uint64", "name": "_startingBeefyBlock", "type": "uint64" }],
      "stateMutability": "nonpayable",
      "type": "constructor"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "prover",
        "type": "address"
      }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }],
      "name": "FinalVerificationSuccessful",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "prover",
        "type": "address"
      }, { "indexed": false, "internalType": "uint256", "name": "blockNumber", "type": "uint256" }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }],
      "name": "InitialVerificationSuccessful",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "internalType": "bytes32",
        "name": "mmrRoot",
        "type": "bytes32"
      }, { "indexed": false, "internalType": "uint64", "name": "blockNumber", "type": "uint64" }],
      "name": "NewMMRRoot",
      "type": "event"
    }, {
      "inputs": [],
      "name": "BLOCK_WAIT_PERIOD",
      "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "ERROR_AND_SAFETY_BUFFER",
      "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "MAXIMUM_BLOCK_GAP",
      "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "MMR_LEAF_LENGTH_SCALE_ENCODED",
      "outputs": [{ "internalType": "bytes2", "name": "", "type": "bytes2" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "NUMBER_OF_BLOCKS_PER_SESSION",
      "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "THRESHOLD_DENOMINATOR",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "THRESHOLD_NUMERATOR",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }, {
        "components": [{
          "internalType": "bytes32",
          "name": "payload",
          "type": "bytes32"
        }, { "internalType": "uint64", "name": "blockNumber", "type": "uint64" }, {
          "internalType": "uint32",
          "name": "validatorSetId",
          "type": "uint32"
        }], "internalType": "struct BeefyLightClient.Commitment", "name": "commitment", "type": "tuple"
      }, {
        "components": [{
          "internalType": "bytes[]",
          "name": "signatures",
          "type": "bytes[]"
        }, { "internalType": "uint256[]", "name": "positions", "type": "uint256[]" }, {
          "internalType": "address[]",
          "name": "publicKeys",
          "type": "address[]"
        }, { "internalType": "bytes32[][]", "name": "publicKeyMerkleProofs", "type": "bytes32[][]" }],
        "internalType": "struct BeefyLightClient.ValidatorProof",
        "name": "validatorProof",
        "type": "tuple"
      }, {
        "components": [{ "internalType": "uint8", "name": "version", "type": "uint8" }, {
          "internalType": "uint32",
          "name": "parentNumber",
          "type": "uint32"
        }, { "internalType": "bytes32", "name": "parentHash", "type": "bytes32" }, {
          "internalType": "bytes32",
          "name": "parachainHeadsRoot",
          "type": "bytes32"
        }, { "internalType": "uint64", "name": "nextAuthoritySetId", "type": "uint64" }, {
          "internalType": "uint32",
          "name": "nextAuthoritySetLen",
          "type": "uint32"
        }, { "internalType": "bytes32", "name": "nextAuthoritySetRoot", "type": "bytes32" }],
        "internalType": "struct BeefyLightClient.BeefyMMRLeaf",
        "name": "latestMMRLeaf",
        "type": "tuple"
      }, {
        "components": [{
          "internalType": "bytes32[]",
          "name": "merkleProofItems",
          "type": "bytes32[]"
        }, { "internalType": "uint64", "name": "merkleProofOrderBitField", "type": "uint64" }],
        "internalType": "struct SimplifiedMMRProof",
        "name": "proof",
        "type": "tuple"
      }], "name": "completeSignatureCommitment", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
      "inputs": [{
        "components": [{
          "internalType": "bytes32",
          "name": "payload",
          "type": "bytes32"
        }, { "internalType": "uint64", "name": "blockNumber", "type": "uint64" }, {
          "internalType": "uint32",
          "name": "validatorSetId",
          "type": "uint32"
        }], "internalType": "struct BeefyLightClient.Commitment", "name": "commitment", "type": "tuple"
      }],
      "name": "createCommitmentHash",
      "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
      "stateMutability": "pure",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256[]",
        "name": "bitsToSet",
        "type": "uint256[]"
      }, { "internalType": "uint256", "name": "length", "type": "uint256" }],
      "name": "createInitialBitfield",
      "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
      "stateMutability": "pure",
      "type": "function"
    }, {
      "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }],
      "name": "createRandomBitfield",
      "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "currentId",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "components": [{
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }, { "internalType": "uint32", "name": "parentNumber", "type": "uint32" }, {
          "internalType": "bytes32",
          "name": "parentHash",
          "type": "bytes32"
        }, { "internalType": "bytes32", "name": "parachainHeadsRoot", "type": "bytes32" }, {
          "internalType": "uint64",
          "name": "nextAuthoritySetId",
          "type": "uint64"
        }, { "internalType": "uint32", "name": "nextAuthoritySetLen", "type": "uint32" }, {
          "internalType": "bytes32",
          "name": "nextAuthoritySetRoot",
          "type": "bytes32"
        }], "internalType": "struct BeefyLightClient.BeefyMMRLeaf", "name": "leaf", "type": "tuple"
      }],
      "name": "encodeMMRLeaf",
      "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }],
      "stateMutability": "pure",
      "type": "function"
    }, {
      "inputs": [{ "internalType": "bytes", "name": "leaf", "type": "bytes" }],
      "name": "hashMMRLeaf",
      "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
      "stateMutability": "pure",
      "type": "function"
    }, {
      "inputs": [],
      "name": "latestBeefyBlock",
      "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "latestMMRRoot",
      "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "mmrVerification",
      "outputs": [{ "internalType": "contract SimplifiedMMRVerification", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes32",
        "name": "commitmentHash",
        "type": "bytes32"
      }, {
        "internalType": "uint256[]",
        "name": "validatorClaimsBitfield",
        "type": "uint256[]"
      }, { "internalType": "bytes", "name": "validatorSignature", "type": "bytes" }, {
        "internalType": "uint256",
        "name": "validatorPosition",
        "type": "uint256"
      }, { "internalType": "address", "name": "validatorPublicKey", "type": "address" }, {
        "internalType": "bytes32[]",
        "name": "validatorPublicKeyMerkleProof",
        "type": "bytes32[]"
      }], "name": "newSignatureCommitment", "outputs": [], "stateMutability": "payable", "type": "function"
    }, {
      "inputs": [{ "internalType": "uint256", "name": "numValidators", "type": "uint256" }],
      "name": "requiredNumberOfSignatures",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "pure",
      "type": "function"
    }, {
      "inputs": [],
      gas: null,
      payable: null,
      anonymous: null,
      constant: null,
      "name": "requiredNumberOfSignatures",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      gas: null,
      payable: null,
      anonymous: null,
      constant: null,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
        indexed: false,
      }],
      "name": "validationData",
      "outputs": [{
        "internalType": "address",
        "name": "senderAddress",
        "type": "address"
      }, { "internalType": "bytes32", "name": "commitmentHash", "type": "bytes32" }, {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      gas: null,
      payable: null,
      anonymous: null,
      constant: null,
      "inputs": [],
      "name": "validatorRegistry",
      "outputs": [{ "internalType": "contract ValidatorRegistry", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      gas: null,
      payable: null,
      anonymous: null,
      constant: null,
      "inputs": [{
        "internalType": "bytes32",
        "name": "beefyMMRLeaf",
        "type": "bytes32"
      }, {
        "components": [{
          "internalType": "bytes32[]",
          "name": "merkleProofItems",
          "type": "bytes32[]"
        }, { "internalType": "uint64", "name": "merkleProofOrderBitField", "type": "uint64" }],
        "internalType": "struct SimplifiedMMRProof",
        "name": "proof",
        "type": "tuple"
      }],
      "name": "verifyBeefyMerkleLeaf",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "components": [{
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }, { "internalType": "uint32", "name": "parentNumber", "type": "uint32" }, {
          "internalType": "bytes32",
          "name": "parentHash",
          "type": "bytes32"
        }, { "internalType": "bytes32", "name": "parachainHeadsRoot", "type": "bytes32" }, {
          "internalType": "uint64",
          "name": "nextAuthoritySetId",
          "type": "uint64"
        }, { "internalType": "uint32", "name": "nextAuthoritySetLen", "type": "uint32" }, {
          "internalType": "bytes32",
          "name": "nextAuthoritySetRoot",
          "type": "bytes32"
        }], "internalType": "struct BeefyLightClient.BeefyMMRLeaf", "name": "leaf", "type": "tuple"
      }, {
        "internalType": "bytes32",
        "name": "root",
        "type": "bytes32"
      }, {
        "components": [{
          "internalType": "bytes32[]",
          "name": "merkleProofItems",
          "type": "bytes32[]"
        }, { "internalType": "uint64", "name": "merkleProofOrderBitField", "type": "uint64" }],
        "internalType": "struct SimplifiedMMRProof",
        "name": "proof",
        "type": "tuple"
      }], "name": "verifyNewestMMRLeaf", "outputs": [], "stateMutability": "view", "type": "function"
    }]
  }
  
  
}

