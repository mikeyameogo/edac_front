export interface IFournisseur {

    id?: number;
    libelle?: string;
    telephone?: string;
    code ?: number;
    banque ?: string;
    email?: string;
    description?: string
}

export class Fournisseur implements IFournisseur {
    constructor(
        public id?: number,
        public libelle?: string,
        public code?: number,
        public telephone?: string,
        public banque?: string,
        public email?: string,
        public description?: string,
    ){}
}
