export interface IVisa {
    id?: number;
    code?: number;
    libelle?: string;
}

export class Visa implements IVisa {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string
    ){}
}
