## Notes
See documentation for [Bzz](https://web3js.readthedocs.io/en/v1.5.2/web3-bzz.html)

### Errors
Errors are unhandled and need to be handled by the user

### Provider
Changing or getting providers should only be possible by the admin,
therefore no functions are implemented of that kind.

### Upload
There are couple of possible types of variables to upload, e.g. `string`, `Uint8Array` and `Object`, all
of which get their own function, because aqua doesn't allow different type definitions on one variable.

The `uploadObject` function takes a stringified object


### Download
Same as for Upload, but without the `Uint8Array`
Downloads could allow a second argument called `localpath`, which saves the content
at a certain path, but I don't think this fits into the contect of a decentralized network.

The `downloadObject` function returns a stringified object.
It could fail if parsing the response is invalid.

### Pick
Pick wouldn't work as it opens a window to select files
