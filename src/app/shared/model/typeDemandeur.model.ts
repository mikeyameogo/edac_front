import { TauxFCotisation } from "./taux-fcotisation";

export interface ITypeDemandeur{
    code?: string;
    libelle?: string;
   
}

export class TypeDemandeur implements ITypeDemandeur{
    constructor(
      public code?: string,
      public libelle?: string
     
        ){}
}
