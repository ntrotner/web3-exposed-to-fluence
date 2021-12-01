## Notes
Most of the documentation is identical to [Eth](https://web3js.readthedocs.io/en/v1.5.2/web3-eth.html)

### Providers
Following Functions aren't supported, as they don't have any
benefit in using them in Fluence. Additionally, they could
leak the URL, to which the service is connected.
```markdown
setProvider
providers
givenProvider
currentProvider
```

### Types
1. If there is a list of types like `Number|String|BN|BigNumber` or `String|Number`, then only `String` is valid.
2. Numbers are maxed out to `u64`, as all of them are used to count up and don't use negative numbers.
3. Optionals are indicated with `?type`

### Callbacks
Unsupported

### getPastLogs
`address` and `topics` only allow 1D-Arrays

### requestAccounts
Disabled, as this isn't an injected provider

### PromiEvent
As seen in [sendTransaction](https://web3js.readthedocs.io/en/v1.5.2/web3-eth.html#sendtransaction)
, only callback is supported, so you can't access `sending`, `sent` ...

### returnTransactionObjects
The following functions set it to false, so it returns just a string, instead of an object.
Instead, the string can be used to call the `Eth.getTransaction` function.
```markdown
getBlock
getUncle
```
