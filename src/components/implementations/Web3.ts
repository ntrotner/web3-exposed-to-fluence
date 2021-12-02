import { Web3Def } from "../../compiled/Web3";
import Web3js from "web3";

export class Web3 implements Web3Def {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  getMetaInformation() {
    return { version: this.web3.version }
  }
}
