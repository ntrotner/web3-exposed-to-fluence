import Web3js from "web3";
import { UtilsDef } from "../../compiled/Utils";
import { CallParams } from "@fluencelabs/fluence/dist/internal/compilerSupport/v2";
import { Mixed, Unit } from "web3-utils";

export class Utils implements UtilsDef {
  private web3: Web3js;
  
  constructor(web3: Web3js) {
    this.web3 = web3
  }
  
  asciiToHex(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.asciiToHex(input);
  }
  
  bytesToHex(input: number[], callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.bytesToHex(input);
  }
  
  checkAddressChecksum(address: string, callParams: CallParams<"address">): boolean | Promise<boolean> {
    return this.web3.utils.checkAddressChecksum(address);
  }
  
  fromWei(input: string, unit: string | null, callParams: CallParams<"input" | "unit">): string | Promise<string> {
    return this.web3.utils.fromWei(input, unit as Unit);
  }
  
  hexToAscii(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.hexToAscii(input);
  }
  
  hexToBytes(input: string, callParams: CallParams<"input">): number[] | Promise<number[]> {
    return this.web3.utils.hexToBytes(input);
  }
  
  hexToNumber(input: string, callParams: CallParams<"input">): number | Promise<number> {
    return this.web3.utils.hexToNumber(input);
  }
  
  hexToNumberString(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.hexToNumberString(input);
  }
  
  hexToUtf8(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.hexToUtf8(input);
  }
  
  isAddress(address: string, callParams: CallParams<"address">): boolean | Promise<boolean> {
    return this.web3.utils.isAddress(address);
  }
  
  isHex(input: string, callParams: CallParams<"input">): boolean | Promise<boolean> {
    return this.web3.utils.isHex(input);
  }
  
  isHexStrict(input: string, callParams: CallParams<"input">): boolean | Promise<boolean> {
    return this.web3.utils.isHexStrict(input);
  }
  
  numberToHex(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.numberToHex(input);
  }
  
  padLeft(input: string, characterAmount: number, sign: string | null, callParams: CallParams<"input" | "characterAmount" | "sign">): string | Promise<string> {
    return this.web3.utils.padLeft(input, characterAmount, sign);
  }
  
  padRight(input: string, characterAmount: number, sign: string | null, callParams: CallParams<"input" | "characterAmount" | "sign">): string | Promise<string> {
    return this.web3.utils.padRight(input, characterAmount, sign);
  }
  
  sha3(input: string, callParams: CallParams<"input">): string | Promise<string | null> | null {
    return this.web3.utils.sha3(input);
  }
  
  soliditySha3(val: string[], callParams: CallParams<"val">): string | Promise<string | null> | null {
    return this.web3.utils.soliditySha3(...(val as Mixed[]));
  }
  
  soliditySha3Raw(val: string[], callParams: CallParams<"val">): string | Promise<string> {
    return this.web3.utils.soliditySha3Raw(...val);
  }
  
  stripHexPrefix(hex: string, callParams: CallParams<"hex">): string | Promise<string> {
    return this.web3.utils.stripHexPrefix(hex);
  }
  
  toChecksumAddress(address: string, callParams: CallParams<"address">): string | Promise<string> {
    return this.web3.utils.toChecksumAddress(address);
  }
  
  toHex(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.toHex(input);
  }
  
  toTwosComplement(input: number, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.toTwosComplement(input);
  }
  
  toWei(input: string, unit: string | null, callParams: CallParams<"input" | "unit">): string | Promise<string> {
    return this.web3.utils.toWei(input, unit as Unit);
  }
  
  typedSoliditySha3(val: { type: string; value: string }[], callParams: CallParams<"val">): string | Promise<string | null> | null {
    return this.web3.utils.soliditySha3(...val);
  }
  
  typedSoliditySha3Raw(val: { type: string; value: string }[], callParams: CallParams<"val">): string | Promise<string> {
    return this.web3.utils.soliditySha3Raw(...val);
  }
  
  unitMap(callParams: CallParams<null>): { babbage: string; ether: string; femtoether: string; finney: string; gether: string; grand: string; gwei: string; kether: string; kwei: string; lovelace: string; mether: string; micro: string; microether: string; milli: string; milliether: string; mwei: string; nano: string; nanoether: string; noether: string; picoether: string; shannon: string; szabo: string; tether: string; wei: string } | Promise<{ babbage: string; ether: string; femtoether: string; finney: string; gether: string; grand: string; gwei: string; kether: string; kwei: string; lovelace: string; mether: string; micro: string; microether: string; milli: string; milliether: string; mwei: string; nano: string; nanoether: string; noether: string; picoether: string; shannon: string; szabo: string; tether: string; wei: string }> {
    // @ts-ignore
    return this.web3.utils.unitMap;
  }
  
  utf8ToHex(input: string, callParams: CallParams<"input">): string | Promise<string> {
    return this.web3.utils.utf8ToHex(input);
  }
}
