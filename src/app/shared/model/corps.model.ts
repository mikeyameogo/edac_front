
export interface ICorps{
    id?: number;
    code?: string;
    libelle?: string;
}

export class Corps implements ICorps{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string
    ){}
}