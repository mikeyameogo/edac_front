import {TypeStructure} from "./typeStructure.model";
import {Ministere} from "./ministere.model";

export interface IStructure {
    id?: number;
    code?: number;
    libelle?: string;
    sigle?: string;
    responsable?: string;
    type?: TypeStructure;
    parent?: Structure;
    ministere?: Ministere
}

export class Structure implements IStructure {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
        public sigle?: string,
        public responsable?: string,
        public type?: TypeStructure,
        public parent?: Structure,
        public ministere?: Ministere,

    ){}
}
export interface GetAllStructureResponse {
    structures: IStructure[];
}
