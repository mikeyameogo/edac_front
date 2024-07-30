import { Circuit } from "./circuit.model";
export interface IHistorique {
    id?: number;
    date?: Date;
    commentaire?: string;
    avis?: string;
    circuit?: Circuit;
    
}

export class Historique implements IHistorique {
    constructor(
        public id?: number,
        public date?: Date,
        public commentaire?: string,
        public avis?: string,
        public circuit?: Circuit,
       
    ) {
    }
  

}

// export enum avis {
//     avis1 = 'Avis favorable',
//     avis2 = 'Avis defavorable'
// }

export const AVIS = [
    { code: 'FAVORABLE', lib: 'FAVORABLE' },
    { code: 'DEFAVORABLE', lib: 'DEFAVORABLE' },
];
  
export const RECEPTIONS = [
    { code: 'CONFORME', lib: 'CONFORME' },
    { code: 'NON_CONFORME', lib: 'NON CONFORME' },
];
