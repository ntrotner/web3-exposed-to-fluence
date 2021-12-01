import { ConvertDef, EthDef, Web3Def } from "../compiled/Web3";
import { Web3js } from "./web3";

export class Convert implements ConvertDef {
  strTof64(input: string): number[] | Promise<number[]> {
    return JSON.parse(input);
  }
}

export class Web3 implements Web3Def {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  getMetaInformation() {
    return { version: this.web3.version }
  }
}


export class Eth implements EthDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  getBalance(address: string, defaultBlock: string | null): string | Promise<string> {
    return this.web3.eth.getBalance(address, defaultBlock)
  }
  
  getAccounts(): string[] | Promise<string[]> {
    return this.web3.eth.getAccounts()
  }
  
  getBlockNumber(): number | Promise<number> {
    return this.web3.eth.getBlockNumber();
  }
  
  async getFeeHistory(blockCount: number, newestBlock: number, rewardPercentiles: number[]): Promise<{ baseFeePerGas: string[]; gasUsedRatio: number[]; oldestBlock: number; reward: string[] }> {
    let response = await this.web3.eth.getFeeHistory(blockCount, newestBlock, rewardPercentiles)
    console.log(response)
    return response;
  }
  
  getGasPrice(): string | Promise<string> {
    return this.web3.eth.getGasPrice();
  }
  
}
