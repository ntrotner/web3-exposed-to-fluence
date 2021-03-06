import { Fluence } from '@fluencelabs/fluence';
import { krasnodar } from '@fluencelabs/fluence-network-environment';
import { createConnection } from './components/web3';
import { settings } from '../settings';
import { Convert } from './components/implementations/Convert';
import { Eth } from './components/implementations/Eth';
import { Web3 } from './components/implementations/Web3';
import { registerConvert } from './compiled/Convert';
import { registerEth } from './compiled/Eth';
import { registerWeb3 } from './compiled/Web3';
import Web3js from 'web3';
import { registerUtils } from './compiled/Utils';
import { Utils } from './components/implementations/Utils';
import { registerBzz } from './compiled/Bzz';
import { Bzz } from './components/implementations/Bzz';
import { registerAccounts } from './compiled/Accounts';
import { Accounts } from './components/implementations/Accounts';
import { registerShh } from './compiled/Shh';
import { Shh } from './components/implementations/Shh';
import { registerAbi } from './compiled/Abi';
import { Abi } from './components/implementations/Abi';
import { registerEns } from './compiled/Ens';
import { Ens } from './components/implementations/Ens';
import { registerPersonal } from './compiled/Personal';
import { Personal } from './components/implementations/Personal';
import { registerContract } from './compiled/Contract';
import { Contract } from './components/implementations/Contract';
import { registerIban } from './compiled/Iban';
import { Iban } from './components/implementations/Iban';


async function main() {
  await Fluence.start({
    connectTo: settings.connectTo.peerId === '' && settings.connectTo.multiaddr === '' ? krasnodar[0] : settings.connectTo
  });
  
  let web3: Web3js = createConnection();
  
  if (!settings.production) {
    registerConvert(new Convert(web3));
  }
  
  registerIban(new Iban((web3)));
  registerContract(new Contract(web3));
  registerPersonal(new Personal(web3));
  registerEns(new Ens((web3)));
  registerAbi(new Abi(web3));
  registerShh(new Shh(web3));
  registerAccounts(new Accounts(web3));
  registerBzz(new Bzz(web3));
  registerUtils(new Utils(web3));
  registerWeb3(new Web3(web3));
  registerEth(new Eth(web3));
  
  console.log('Services Wrapper Application Started');
  console.log('Peer ID: ', Fluence.getStatus().peerId);
  console.log('Relay: ', Fluence.getStatus().relayPeerId);
  console.log('Connected: ', Fluence.getStatus().isConnected);
}

main();
