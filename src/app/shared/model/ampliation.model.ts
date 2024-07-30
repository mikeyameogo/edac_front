export interface IAmpliation {
    id?: number;
    code?: number;
    libelle?: string;
}

export class Ampliation implements IAmpliation {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string
    ){}
}
