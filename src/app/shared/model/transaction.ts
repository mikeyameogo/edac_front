export interface ITransaction {

    codeU?: number;
    codeD?: number;
    codeZ?: number,
    telephone?:string;
    montant?: number;
    codeOTP?: string;
    login ?: string;
    password?: string
}

export class Transaction implements ITransaction {
    constructor(
        public codeU?: number,
        public  codeD?: number,
        public codeZ?: number,
        public telephone?:string,
        public montant?: number,
        public codeOTP?: string,
        public login ?: string,
        public password?: string
    ){}
}
