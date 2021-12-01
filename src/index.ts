import { registerConvert, registerEth, registerWeb3 } from "./compiled/Web3";
import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { Web3, Eth, Convert } from "./components/services";
import { createConnection } from "./components/web3";
import { settings } from "../settings";


async function main() {
  await Fluence.start({
    connectTo: settings.connectTo.peerId === "" && settings.connectTo.multiaddr === "" ? krasnodar[0] : settings.connectTo
  });
  
  let web3 = createConnection()
  
  registerWeb3(new Web3(web3));
  registerEth(new Eth(web3));
  registerConvert(new Convert());
  
  console.log("Services Wrapper Application Started");
  console.log("Peer ID: ", Fluence.getStatus().peerId);
  console.log("Relay: ", Fluence.getStatus().relayPeerId);
}

main();
