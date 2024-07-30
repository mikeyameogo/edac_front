export interface ITypesCotisation{
    id?: number;
    code?: string;
    libelle?: string;
}

export class TypesCotisation implements ITypesCotisation{
    constructor(
       public id?: number,
       public code?: string,
       public libelle?: string
    ){}
}

export class ITcotisation{
    id?: number;
    code?: string;
    libelle?: string;
}

export class TTcotisation implements ITcotisation{
    constructor(
       public id?: number,
       public code?: string,
       public libelle?: string
    ){}
}

export interface GetAllTypesCotisationsResponse {
    typesCotisations: TypesCotisation[];
}