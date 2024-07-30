import {TypeAGDTOs} from "./typeAGDTOs.model";

export interface ISignataire{
    id?: number;
    nom?: string;
    prenom?: string;
    fonction?: string;
    titreHonorifique?: string;
    typeAGDTOs?: TypeAGDTOs[];
}

export class Signataire  implements ISignataire{
    constructor(
        public id?: number,
        public nom?: string,
        public prenom?: string,
        public fonction?: string,
        public titreHonorifique?: string,
        public typeAGDTOs?: TypeAGDTOs[],
    ){}
}


