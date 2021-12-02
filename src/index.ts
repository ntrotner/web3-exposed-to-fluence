import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { createConnection } from "./components/web3";
import { settings } from "../settings";
import { Convert } from "./components/implementations/Convert";
import { Eth } from "./components/implementations/Eth";
import { Web3 } from "./components/implementations/Web3";
import { registerConvert } from "./compiled/Convert";
import { registerEth } from "./compiled/Eth";
import { registerWeb3 } from "./compiled/Web3";
import Web3js from "web3";
import { registerUtils } from "./compiled/Utils";
import { Utils } from "./components/implementations/Utils";


async function main() {
  await Fluence.start({
    connectTo: settings.connectTo.peerId === "" && settings.connectTo.multiaddr === "" ? krasnodar[0] : settings.connectTo
  });
  
  let web3: Web3js = createConnection()
  
  registerUtils(new Utils(web3));
  registerConvert(new Convert());
  registerWeb3(new Web3(web3));
  registerEth(new Eth(web3));
  
  console.log("Services Wrapper Application Started");
  console.log("Peer ID: ", Fluence.getStatus().peerId);
  console.log("Relay: ", Fluence.getStatus().relayPeerId);
  console.log("Connected: ", Fluence.getStatus().isConnected)
}

main();
