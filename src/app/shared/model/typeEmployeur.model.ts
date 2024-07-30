import { TauxFCotisation } from "./taux-fcotisation";

export interface ITypeEmployeur{
    id?: number;
    codeType?: string;
    libelle?: string;
    categorie?: string;
    taux?:TauxFCotisation;
}

export class TypeEmployeur implements ITypeEmployeur{
    constructor(
        public id?: number, 
        public codeType?: string,
        public libelle?: string,
        public categorie?: string,
        public taux?:TauxFCotisation){}
}
