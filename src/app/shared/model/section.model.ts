import { IDivision } from "./division.model";

export class Section implements ISection {
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string,
        public divisions?: IDivision[]
        ){}
}

export interface ISection{
    id?: number;
    code?: string;
    libelle?: string;
    divisions?: IDivision[];
   // est_actif?: boolean;

}
