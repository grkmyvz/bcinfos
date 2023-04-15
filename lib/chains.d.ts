export type IChainData = {
    chainId: number;
    chainIdHex: string;
    name: string;
    currencyName: string;
    currencySymbol: string;
    blockExplorerUrl: string;
    rpcUrl: string | null;
};
export type IChains = {
    [key: number]: IChainData;
};
export declare const ChainData: IChains;
