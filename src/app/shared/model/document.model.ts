//A changer pour mettre divion à la place
import { Groupe } from "./groupe.model";

export class IDocuement{
    id?: number;
    libelle?: string;
    url?: string;
}

export class Docuement implements IDocuement{
    constructor(
        public id?: number, 
        public libelle?: string,
        public url?: string,
        ){}
}
export interface GetAllDocuementResponse {
    Docuements: IDocuement[];
}