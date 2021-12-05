## Web3.js in Fluence

### Please Read The /src/aqua/doc/* files before dispatching transactions that may cost ether

It contains some useful information, so that you can be sure about input and return types.

### How to Run

1. Get your `multiaddr` & `peerId` and add them to the `settings.json`.
    1. Alternatively, you set both fields to an empty string and it connects to the `krasnoda[0]`
2. Set the Provider URL/Object for Services

Then run `npm install && npm run start` which should run the service.

### How to Compile

Prerequisites: `fldist` `aqua`

#### Compiling the Service (Optionally)

```bash
npm run compile:ts
```

#### Compiling the Tests (Mandatory for Running Tests)

Set the `PEER` and `RELAY` attributes in `tests/address.aqua` and `node` in `package.json`

```bash
npm run compile:tests
```
or
```bash
npm run start:tests:contract
```
which compiles `contract` tests and runs them

### Running Tests

1. `npm run start:tests:...`
