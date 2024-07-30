import { ITauxFCotisation } from "./taux-fcotisation";

export interface ITypesAssure {
    id?: number;
    codeType?: string;
    libelle?: string;
    taux?: ITauxFCotisation;
}

export class TypesAssure implements ITypesAssure {
    constructor(
        public id?: number,
        public codeType?: string,
        public libelle?: string,
        public taux?: ITauxFCotisation
    ){}
}
