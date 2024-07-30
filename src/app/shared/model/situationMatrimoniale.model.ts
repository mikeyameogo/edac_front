
export interface ISituationMatrimoniale {
    id?: number;
    code?: number;
    libelle?: string;
}

export class SituationMatrimoniale implements ISituationMatrimoniale {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string
    ){}
}
