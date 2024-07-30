import { TauxFCotisation } from "./taux-fcotisation";
import { ITypesAssure } from "./typesAssures.model";

export interface ITAssureTCotisation {
    id?:number;
    typeAssure?:ITypesAssure;
    tauxFCotisation?:TauxFCotisation
}

export class TAssureTCotisation implements ITAssureTCotisation{
    constructor(
        public id?: number,
        public typeAssure?: ITypesAssure,
        public tauxFCotisation?: TauxFCotisation
    ){}
}