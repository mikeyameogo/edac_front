export interface IValideAffiliation{
    id?: number;
    motifRejet?: string;
    valide?: boolean;
}
export class ValideAffiliation implements IValideAffiliation{
    constructor(
        public id?: number,
        public motifRejet?: string,
        public valide?: boolean
    ){}
}
