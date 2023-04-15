import { IChains, IChainData } from "./chains";
export type { IChainData };
export declare const getChainList: () => Array<number>;
export declare const getChainData: (chainId: number) => IChains[number];
export declare const setRpcUrl: (chainId: number, rpcUrl: string) => void;
