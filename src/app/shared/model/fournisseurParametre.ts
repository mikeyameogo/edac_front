import { IFournisseur } from "./fournisseur";

export interface IFournisseurParam {
    id?: number;
    libelle?: string;
    defaultMercantMSISDN?: string;
    defaultApiUserName?: string;
    defaultProvider ?: string;
    defaultProvider2 ?: string;
    defaultPayID ?: string;
    defaultPayID2 ?: string;
    defaultRefNumber ?: number;
    defaultExtTxnID ?: string;
    defaultCurrencyCode?: number
    actif ?: boolean;
    debit ?: number
    nombreEtape?: number;  
    accessUrl ?: string;
    fournisseur ?: IFournisseur

}


export class FournisseurParam implements IFournisseurParam {
    constructor(
      public id?: number,     
      public libelle?: string,
      public actif ?: boolean,
      public debit ?: number,
      public nombreEtape?: number,
      public accessUrl ?: string,
      public fournisseur ?: IFournisseur
    ){}
}
