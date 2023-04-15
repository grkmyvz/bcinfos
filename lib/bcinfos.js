"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRpcUrl = exports.getChainData = exports.getChainList = void 0;
const chains_1 = require("./chains");
const getChainList = () => {
  return Object.keys(chains_1.ChainData).map((key) => parseInt(key));
};
exports.getChainList = getChainList;
const getChainData = (chainId) => {
  if (typeof chainId !== "number") throw new Error("chainId must be a number");
  if (!chains_1.ChainData[chainId]) throw new Error("chainId not found");
  return chains_1.ChainData[chainId];
};
exports.getChainData = getChainData;
const setRpcUrl = (chainId, rpcUrl) => {
  if (typeof chainId !== "number" && typeof rpcUrl !== "string")
    throw new Error("chainId must be a number, rpcUrl must be a string");
  chains_1.ChainData[chainId].rpcUrl = rpcUrl;
};
exports.setRpcUrl = setRpcUrl;

console.log(getChainList());
