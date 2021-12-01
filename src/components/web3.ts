import { settings } from "../../settings";

const Web3 = require('web3');

export type Web3js = typeof Web3

export function createConnection() {
  return new Web3(settings.web3.provider);
}
