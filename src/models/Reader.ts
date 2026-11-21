import {Copy} from "./Copy";

export class Reader {
    private copies: Copy[] = [];

    constructor(
        private readonly _id: string,
        private readonly _name: string
    ) {
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    public addCopy(copy: Copy) {
        this.copies.push(copy);
    }

    public returnCopy(copy: Copy) {
        const index = this.copies.indexOf(copy);

        if (index === -1) return false;

        this.copies.splice(index, 1);

        return true;
    }

    public getId(): string {
        return this.id;
    }
}
