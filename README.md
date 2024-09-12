# ping ipfs gateway

This package helps to ping working IPFS gateway and returns it. Initially, it was made to check videos and replace broken links.

## Set up

``` 
npm i ping-ipfs-gateway
```

```
const pingIPFS = require('ping-ipfs-gateway')
```

## How to use

Use as a simple function. 

```
pingIPFS()
```

## Parameters

There are three function parameters: 

1. **CONFIG** - config with all possible gateways. Optional parameter.

Default config: 

```js
[
  'https://ipfs.io/ipfs/',
  'https://crustipfs.live/ipfs/',
  'https://crustipfs.info/ipfs/',
  'https://gateway.pinata.cloud/ipfs/',
  'https://gw.crust-gateway.com/ipfs/',
  'https://gw.crust-gateway.xyz/ipfs/',
  'https://gw.crust-gateway.cc/ipfs/'
]
```


2. **DEFAULT SOURCE** to use in IPFS request and to make sure currently tested gateway works. Optional parameter.

Default - `QmStCDsEHCYwVYvnDdmZBMnobPmrgZx3iJLm65b8XNzKQa`

3. **TIMEOUT**. If you want to specify request timeout. Optional parameter.

Default - `8000`

## Example: 

Your function can look something like that: 

`await pingIPFS(config, 'QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C')`
