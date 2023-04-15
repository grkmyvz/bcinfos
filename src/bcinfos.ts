import { ChainData, IChains, IChainData } from "./chains";

export type { IChainData };

export const getChainList = (): Array<number> => {
  return Object.keys(ChainData).map((key) => parseInt(key));
};

export const getChainData = (chainId: number): IChains[number] => {
  if (typeof chainId !== "number") throw new Error("chainId must be a number");
  if (!ChainData[chainId]) throw new Error("chainId not found");
  return ChainData[chainId];
};

export const setRpcUrl = (chainId: number, rpcUrl: string): void => {
  if (typeof chainId !== "number" && typeof rpcUrl !== "string")
    throw new Error("chainId must be a number, rpcUrl must be a string");
  ChainData[chainId].rpcUrl = rpcUrl;
};
