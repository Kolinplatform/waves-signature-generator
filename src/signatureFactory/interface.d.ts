import { BigNumber } from '@waves/data-entities';


export interface ISignatureGenerator {

    getSignature(privateKey: string): Promise<string>;

    getBytes(): Promise<Uint8Array>;

    getDebugBytes(): Promise<Array<{ bytes: Uint8Array, from: any, value: any }>>;

    getExactBytes(fieldName: string): Promise<Uint8Array>;
}

export interface ISignatureGeneratorConstructor<T> {
    new(data: T): ISignatureGenerator;
}

export interface IDEFAULT_PROPS {
    senderPublicKey: string;
    timestamp: string | BigNumber;
}

export interface IISSUE_PROPS extends IDEFAULT_PROPS {
    chainId: number;
    name: string;
    description: string;
    quantity: string | BigNumber;
    precision: number;
    reissuable: boolean;
    fee: string | BigNumber;
}

export interface ITRANSFER_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    feeAssetId: string;
    amount: string | BigNumber;
    fee: string | BigNumber;
    recipient: string;
    attachment: string;
}

export interface IREISSUE_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    quantity: string | BigNumber;
    reissuable: boolean;
    fee: string | BigNumber;
}

export interface IBURN_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    quantity: string | BigNumber;
    fee: string;
}

export interface ILEASE_PROPS extends IDEFAULT_PROPS {
    recipient: string;
    amount: string | BigNumber;
    fee: string | BigNumber;
}

export interface ICANCEL_LEASING_PROPS extends IDEFAULT_PROPS {
    fee: string | BigNumber;
    transactionId: string;
}

export interface ICREATE_ALIAS_PROPS extends IDEFAULT_PROPS {
    alias: string;
    fee: string | BigNumber;
}

export interface IMASS_TRANSFER_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    transfers: Array<IMASS_TRANSFER_TRANSFERS>;
    fee: string | BigNumber;
    attachment: string;
}

export interface IDATA_PROPS extends IDEFAULT_PROPS {
    data: Array<IDATA_ENTRY>;
    fee: string | BigNumber;
}

export interface IORDER_PROPS extends IDEFAULT_PROPS {
    matcherPublicKey: string;
    amountAsset: string;
    priceAsset: string;
    orderType: string;
    price: string;
    amount: string;
    expiration: number;
    matcherFee: string;
}

export interface ICANCEL_ORDER_PROPS {
    senderPublicKey: string;
    orderId: string;
}

export interface IMASS_TRANSFER_TRANSFERS {
    recipient: string;
    amount: string | BigNumber;
}


export interface ISET_SCRIPT_PROPS extends IDEFAULT_PROPS {
    script: string;
    chainId: number;
    fee: string | BigNumber;
}

export interface ISPONSORSHIP_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    minSponsoredAssetFee: string | BigNumber;
    fee: string | BigNumber;
}


export interface IDATA_ENTRY {
    key: string;
    type: string;
    value: any;
}

export type TTX_NUMBER_MAP = {
    3: ISignatureGeneratorConstructor<IISSUE_PROPS>;
    4: ISignatureGeneratorConstructor<ITRANSFER_PROPS>;
    5: ISignatureGeneratorConstructor<IREISSUE_PROPS>;
    6: ISignatureGeneratorConstructor<IBURN_PROPS>;
    7: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    8: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    9: ISignatureGeneratorConstructor<ICANCEL_LEASING_PROPS>;
    10: ISignatureGeneratorConstructor<ICREATE_ALIAS_PROPS>;
    11: ISignatureGeneratorConstructor<IMASS_TRANSFER_PROPS>;
    12: ISignatureGeneratorConstructor<IDATA_PROPS>;
    13: ISignatureGeneratorConstructor<ISET_SCRIPT_PROPS>;
    14: ISignatureGeneratorConstructor<ISPONSORSHIP_PROPS>;
}

export type TTX_TYPE_MAP = {
    issue: ISignatureGeneratorConstructor<IISSUE_PROPS>;
    transfer: ISignatureGeneratorConstructor<ITRANSFER_PROPS>;
    reissue: ISignatureGeneratorConstructor<IREISSUE_PROPS>;
    burn: ISignatureGeneratorConstructor<IBURN_PROPS>;
    exchange: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    lease: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    cancelLeasing: ISignatureGeneratorConstructor<ICANCEL_LEASING_PROPS>;
    createAlias: ISignatureGeneratorConstructor<ICREATE_ALIAS_PROPS>;
    massTransfer: ISignatureGeneratorConstructor<IMASS_TRANSFER_PROPS>;
    data: ISignatureGeneratorConstructor<IDATA_PROPS>;
    setScript: ISignatureGeneratorConstructor<ISET_SCRIPT_PROPS>;
    sponsorship: ISignatureGeneratorConstructor<ISPONSORSHIP_PROPS>;
}
