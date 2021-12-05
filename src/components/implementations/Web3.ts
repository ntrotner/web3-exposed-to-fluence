import { Web3Def } from '../../compiled/Web3';
import Web3js from 'web3';

/**
 * allows access to the Web3 module
 *
 * see https://web3js.readthedocs.io/en/v1.5.2/web3.html
 */
export class Web3 implements Web3Def {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
  }
  
  getMetaInformation() {
    return { version: this.web3.version };
  }
}
