
export interface IPiecesFourniesDTO{

  libelle?: string;
  file?: File;

}

export class PiecesFourniesDTO implements IPiecesFourniesDTO{
    constructor(
       public libelle?: string,
       public file?: File

    ){}
}