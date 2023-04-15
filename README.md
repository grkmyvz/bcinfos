# Blockchain Infos - bcinfos

bcinfos is a lightweight library that provides information about popular blockchain networks. The library contains data on the following properties for each blockchain network:

- chainId: a unique numerical identifier for the network
- chainIdHex: the hexadecimal representation of the chainId
- name: the name of the blockchain network
- currencyName: the name of the cryptocurrency used on the network
- currencySymbol: the symbol of the cryptocurrency used on the network
- blockExplorerUrl: the URL of the block explorer for the network
- rpcUrl: The URL of the JSON-RPC endpoint for the network (`string` or `null`). Note that `rpcUrl` is initially set to null, but can be updated using the `setRpcUrl()` function.

All of this data is available through the `getChainData()` function, which takes a `chainId` as its only argument and returns an object with the above properties. Additionally, the `setRpcUrl()` function can be used to update the `rpcUrl` property of a given chain.

## Installation

To install bcinfos, use the following command:

```bash
npm install bcinfos
```

or

```bash
yarn add bcinfos
```

## Usage

### Importing the library

```javascript
import { getChainList, getChainData, setRpcUrl } from "bcinfos";
```

### Fetching the list of available chains

```javascript
const chainList = getChainList();
console.log(chainList);
// [1, 5, 42161, 10, 137, 100, 56, 97, 43114, 43113, 250, 4002, 42220]
```

### Fetching chain getChainData

```javascript
const chainData = getChainData(1);
console.log(chainData);
/*
{
chainId: 1,
chainIdHex: "0x1",
name: "Ethereum Mainnet",
currencyName: "Ether",
currencySymbol: "ETH",
blockExplorerUrl: "https://etherscan.io",
rpcUrl: null,
}
*/
```

### Setting an RPC URL for a chain

```javascript
setRpcUrl(1, "https://your-rpc-url");
const chainData = getChainData(1);
console.log(chainData.rpcUrl);
// https://your-rpc-url
```

**If you want to contribute, you can create PR or express your ideas and thoughts with an issue.**
