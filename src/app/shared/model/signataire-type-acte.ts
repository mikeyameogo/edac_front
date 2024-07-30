import {Signataire} from "./signataire.model";
import {TypeActeGenerated} from "./typeActeGenerated.model";

export interface ISignataireTypeActe {
    id?: number;
    signataire?: Signataire;
    typeActe?: TypeActeGenerated;
    qualiteSignataire?: string;
    actif?: boolean;
}

export class SignataireTypeActe implements ISignataireTypeActe{
    constructor(
        public id?: number,
        public signataire?: Signataire,
        public typeActe?: TypeActeGenerated,
        public qualiteSignataire?: string,
        public actif?: boolean,
    ) {}
}
