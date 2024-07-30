import { IMotif } from "./motif.model";


export interface IPiece{
    id?: number;
    libelle?: string;
    motif?: IMotif;
}

export class Piece implements IPiece{
    constructor(
        public id?: number,
        public libelle?: string,
        public motif?: IMotif
    ){}
}