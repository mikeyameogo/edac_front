import {IStructure} from "./structure.model";

export interface ITypeStructure {
    id?: number;
    code?: number;
    libelle?: string;
}

export class TypeStructure implements ITypeStructure {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
    ){}
}

export interface GetAllTypeStructureResponse {
    typeStructures: ITypeStructure[];
}
