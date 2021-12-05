## Notes

### UnitMap
`Kwei`, `kwei` `Mwei`, `mwei`, `Gwei` and `gwei` are given in the original object.
Only the lower case keys are kept.

### Big Number (BN)
Functions are ignored, as the wrapper falls back on strings.
```markdown
toBN
BN
isBN
isBigNumber
```

### SoliditySha3
There are two implementations, both of which only use arrays instead of single parameters:

`soliditySha3` takes an string array with values

`typedSoliditySha3` takes an array of objects that explicitly defines which type 
to use for the value. This is done because I can't overload the previous function.

### hexToBytes / bytesToHex
Somewhat of an outlier in terms of return / input type, as it's a byte array.
Therefore, it's a `[]u8`
