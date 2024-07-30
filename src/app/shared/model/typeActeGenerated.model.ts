export interface ITypeActeGenerated{
    id?: number;
    code?: string;
    libelle?: string;
}

export class TypeActeGenerated  implements ITypeActeGenerated{
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string){}
}


