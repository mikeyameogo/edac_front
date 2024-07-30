export interface ITypesPiece{
    id?: number;
    code?: string;
    libelle?: string;
}

export class TypesPiece  implements ITypesPiece{
    constructor(
        public id?: number, 
        public code?: string, 
        public libelle?: string){}
}

 
