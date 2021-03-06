/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.5.0-247
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';


// Services

export interface Web3Def {
    getMetaInformation: (callParams: CallParams<null>) => { version: string; } | Promise<{ version: string; }>;
}
export function registerWeb3(service: Web3Def): void;
export function registerWeb3(serviceId: string, service: Web3Def): void;
export function registerWeb3(peer: FluencePeer, service: Web3Def): void;
export function registerWeb3(peer: FluencePeer, serviceId: string, service: Web3Def): void;
       

export function registerWeb3(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "Web3",
    "functions" : [
        {
            "functionName" : "getMetaInformation",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        }
    ]
}
    );
}
      
// Functions

