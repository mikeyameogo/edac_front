export interface IValideImmatriculation{
    id?: number;
    motifRejet?: string;
    valide?: boolean;
}
export class ValideImmatriculation implements IValideImmatriculation{
    constructor(
        public id?: number,
        public motifRejet?: string,
        public valide?: boolean
    ){}
}
