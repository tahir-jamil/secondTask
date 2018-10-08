export interface IUser {
    firstName: string;
    lastName: string;
    organization: string;
}

export class User {
    constructor(public firstName: string = "", public lastName: string = "", public organization: string = "") {
    }
}