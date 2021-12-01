## Web3.js in Fluence

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

Set the `PEER` and `RELAY` attributes in `tests/*_tests.aqua`

```bash
npm run compile:tests
```

### Running Tests
1. Run the Compilation for Tests
2. `npm run start:tests`
