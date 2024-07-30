import {Article} from "./article.model";
import {Visa} from "./visa.model";
import {Piece} from "./piece.model";
import {Ampliation} from "./ampliation.model";
import {Motif} from "./motif.model";

export interface ITypeDemande {
    id?: number;
    code?: string;
    libelle?: string;
    plafondAnnee?: number;
    articles?: Article[];
    visas?: Visa[];
    ampliations?: Ampliation[];
}

export class TypeDemande implements ITypeDemande {
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string,
        public plafondAnnee?: number,
        public articles?: Article[],
        public visas?: Visa[],
        public ampliations?: Ampliation[],
    ){}
}
export interface GetAllTypeDemandeResponse {
    typeDemandes: ITypeDemande[];
}

export enum TypeDemandeur {
    Agent = 'agent',
    Structure = 'structure',
  }

  export enum ECategorie {
    DETACHEMENT = 'DETACHEMENT',
    DISPONIBILITE = 'DISPONIBILITE',
  }
