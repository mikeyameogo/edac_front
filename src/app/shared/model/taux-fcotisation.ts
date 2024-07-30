export interface    ITauxFCotisation {
    id?: number;
    code?: string;
    libelle?: string;
    tauxAssure?: number;
    tauxEmployeur?: number;
    forfait?: number;
    actif?: boolean;
}

export class TauxFCotisation implements ITauxFCotisation{
    constructor(
        public code?: string,
        public libelle?: string,
        public id?: number,
        public tauxAssure?: number,
        public tauxEmployeur?: number,
        public forfait?: number,
        public actif?: boolean
    ) {}
}
