
export interface IArticle{
    id?: number;
    code?: string;
    libelle?: string;
}

export class Article implements IArticle{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string
    ){}
}