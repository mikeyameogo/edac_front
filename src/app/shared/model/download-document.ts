import { IAssure } from "./assure";

export interface IDownloadDocument{
    assure?: IAssure;
    typeDocument?: string;
}

export class DownloadDocument implements IDownloadDocument{
    constructor(
        public assure?: IAssure,
        public typeDocument?: string
    ) {}
}