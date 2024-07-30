export interface IFormeJuridique{
    id?: number;
    code?: string;
    libelle?: string;
}

export class FormeJuridique implements IFormeJuridique {
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string
    ){}
}