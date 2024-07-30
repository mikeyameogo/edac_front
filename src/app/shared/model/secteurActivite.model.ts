import { Province } from "./province.model";
import {Emploi} from "./emploi.model";
import {Profession} from "./profession.model";

export class SecteurActivite{
    constructor(public id?: number,
                public code?: string,
                public libelle?: string,
                public emploi?: Emploi[],
                public profession?: Profession[]) {
        this.emploi = [];
        this.profession = [];

    }

}

export interface GetAllSecteurResponse {
    secteurActivites: SecteurActivite[];
}
