"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRpcUrl = exports.getChainData = void 0;
const chains_1 = require("./chains");
const getChainData = (chainId) => {
    return chains_1.ChainData[chainId];
};
exports.getChainData = getChainData;
const setRpcUrl = (chainId, rpcUrl) => {
    chains_1.ChainData[chainId].rpcUrl = rpcUrl;
};
exports.setRpcUrl = setRpcUrl;
