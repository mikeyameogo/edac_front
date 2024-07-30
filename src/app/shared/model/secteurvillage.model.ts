import { IArrondissement } from "./arrondissement.model";

export interface ISecteurVillage{
    id?: number;
    code?: string;
    libelle?: string;
    arrondissement?: IArrondissement;
}

export interface GetAllSecteurVillageResponse {
    secteurVillages: SecteurVillage[];
}
export class SecteurVillage implements ISecteurVillage{
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string,
        public arrondissement?: IArrondissement){}
}
