export interface IQualiteSignataire{
    id?: number;
    label?: string;
}

export class QualiteSignataire  implements IQualiteSignataire{
    constructor(
        public id?: number,
        public label?: string){}
}


