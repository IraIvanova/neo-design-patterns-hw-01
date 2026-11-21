import {AbstractBook} from "./AbstractBook";
import {Author} from "./Author";

export class EBook extends AbstractBook{
    constructor(name: string, year: number,  author: Author, private readonly _url: string) {
        super(name, year, author);
    }

    get url(): string {
        return this._url;
    }

    public getDescription(): string
    {
        return `E-book "${this.name}" by ${this.author.name} (${this.year}) - Available at: <${this.url}>`;
    }
}
