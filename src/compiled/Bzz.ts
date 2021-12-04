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

export interface BzzDef {
    downloadObject: (bzzHash: string, callParams: CallParams<'bzzHash'>) => string | Promise<string>;
    downloadString: (bzzHash: string, callParams: CallParams<'bzzHash'>) => string | Promise<string>;
    uploadObject: (input: string, callParams: CallParams<'input'>) => string | Promise<string>;
    uploadString: (input: string, callParams: CallParams<'input'>) => string | Promise<string>;
    uploadU8Array: (input: number[], callParams: CallParams<'input'>) => string | Promise<string>;
}
export function registerBzz(service: BzzDef): void;
export function registerBzz(serviceId: string, service: BzzDef): void;
export function registerBzz(peer: FluencePeer, service: BzzDef): void;
export function registerBzz(peer: FluencePeer, serviceId: string, service: BzzDef): void;
       

export function registerBzz(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "Bzz",
    "functions" : [
        {
            "functionName" : "downloadObject",
            "argDefs" : [
                {
                    "name" : "bzzHash",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "downloadString",
            "argDefs" : [
                {
                    "name" : "bzzHash",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "uploadObject",
            "argDefs" : [
                {
                    "name" : "input",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "uploadString",
            "argDefs" : [
                {
                    "name" : "input",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "uploadU8Array",
            "argDefs" : [
                {
                    "name" : "input",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
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
