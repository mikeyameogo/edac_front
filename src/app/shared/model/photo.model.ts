import { SecteurActivite } from './secteurActivite.model';
import {Assure} from "./assure";
export interface IPhoto{
    id?: number;
    name?: string;
    url?: string;
    AssureDTO?: Assure;
}

export class Photo implements IPhoto{
    constructor(
        public id?: number,
        public name?: string,
        public url?: string,
        public AssureDTO?:Assure){}
}


