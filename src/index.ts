import { ChainData, IChainData } from "./chains";

export const getChainData = (chainId: number): IChainData => {
  return ChainData[chainId];
};

export const setRpcUrl = (chainId: number, rpcUrl: string): void => {
  ChainData[chainId].rpcUrl = rpcUrl;
};
