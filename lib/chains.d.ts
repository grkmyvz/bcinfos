export type IChainData = {
    [key: number]: {
        chainId: number;
        chainIdHex: string;
        name: string;
        currencyName: string;
        currencySymbol: string;
        blockExplorerUrl: string;
        rpcUrl: string | null;
    };
};
export declare const ChainData: IChainData;
