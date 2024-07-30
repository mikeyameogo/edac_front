import {ITypeActeGenerated, TypeActeGenerated} from "./typeActeGenerated.model";

export interface ITypeAGDTOs{
    qualiteSignataire?: string;
    typeActeGenerated?: TypeActeGenerated;
}

export class TypeAGDTOs  implements ITypeAGDTOs{
    constructor(
        public qualiteSignataire?: string,
        public typeActeGenerated?: TypeActeGenerated){}
}
