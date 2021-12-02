import { settings } from "../../settings";
import Web3js from 'web3'

export function createConnection(): Web3js {
  return (new Web3js(settings.web3.provider));
}
