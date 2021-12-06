## Notes
Most of the documentation is identical to [Web3](https://web3js.readthedocs.io/en/v1.5.2/web3.html)

Still, there are too many inconsistencies to the actual code. I relied more on the `d.ts` files than on
the documentation.

The functionalities are reduced in some areas, as setting the provider should be a secure process only
allowed to do by the service provider, as malicious URL's etc. could lead to a stolen private key.

### Types
`String|Hex` is `string`

`String|Number|BN|BigNumber` is `string`

`String|BN` is `string`

The best example why I avoid numbers as best as I can is the `hexToNumber` function.
When giving it a hex that results in a number that uses more than 53 bits it will fail the
calculation. So, use the string functions instead.

### Shh
Seems to work on some nodes, but most methods seem to be
deprecated on popular nodes

### Ens
I couldn't test it as test nodes and private networks don't support it
