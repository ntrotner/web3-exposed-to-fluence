import { CallParams } from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';
import Web3js from 'web3';
import { IbanDef } from '../../compiled/Iban';

/**
 * allows acces to the Iban module
 *
 * see https://web3js.readthedocs.io/en/v1.5.2/web3-eth-iban.html
 */
export class Iban implements IbanDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3;
  }
  
  toString(iban: string, callParams: CallParams<'iban'>): string | Promise<string> {
    return (new this.web3.eth.Iban(iban)).toString();
  }
  
  checksum(iban: string, callParams: CallParams<'iban'>): string | Promise<string> {
    return (new this.web3.eth.Iban(iban)).checksum();
  }
  
  client(iban: string, callParams: CallParams<'iban'>): string | Promise<string> {
    return (new this.web3.eth.Iban(iban)).client();
  }
  
  createIndirect(options: { identifier: string; institution: string }, callParams: CallParams<'options'>): string | Promise<string> {
    /*
     * seems like bad practice to ignore the type suggestions, but as they
     * aren't up to date, there was the need to ignore the typing
     */
    // @ts-ignore
    return this.web3.eth.Iban.createIndirect(options).toString();
  }
  
  fromAddress(address: string, callParams: CallParams<'address'>): string | Promise<string> {
    // see createIndirect comment
    // @ts-ignore
    return this.web3.eth.Iban.fromAddress(address).toString();
  }
  
  fromBban(bbanAddress: string, callParams: CallParams<'bbanAddress'>): string | Promise<string> {
    // see createIndirect comment
    // @ts-ignore
    return this.web3.eth.Iban.fromBban(bbanAddress).toString();
  }
  
  institution(iban: string, callParams: CallParams<'iban'>): string | Promise<string> {
    return (new this.web3.eth.Iban(iban)).institution();
  }
  
  isDirect(iban: string, callParams: CallParams<'iban'>): boolean | Promise<boolean> {
    return (new this.web3.eth.Iban(iban)).isDirect();
  }
  
  isIndirect(iban: string, callParams: CallParams<'iban'>): boolean | Promise<boolean> {
    return (new this.web3.eth.Iban(iban)).isIndirect();
  }
  
  isValid(iban: string, callParams: CallParams<'iban'>): boolean | Promise<boolean> {
    return (new this.web3.eth.Iban(iban)).isValid();
  }
  
  toAddress(iban: string, callParams: CallParams<'iban'>): string | Promise<string> {
    return (new this.web3.eth.Iban(iban)).toAddress();
  }
  
  toIban(address: string, callParams: CallParams<'address'>): string | Promise<string> {
    // see createIndirect comment
    // @ts-ignore
    return this.web3.eth.Iban.toIban(address);
  }
}
