import {Author} from "./Author";

export abstract class AbstractBook {
    constructor(
        private readonly _name: string,
        private readonly _year: number,
        private readonly _author: Author,
    ) {
    }

    get name(): string {
        return this._name;
    }

    get year(): number {
        return this._year;
    }

    get author(): Author {
        return this._author;
    }

    abstract getDescription(): string;
}
