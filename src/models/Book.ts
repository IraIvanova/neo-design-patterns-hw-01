import { Author } from "./Author";
import {AbstractBook} from "./AbstractBook";

export class Book extends AbstractBook {
  constructor(name: string, year: number, author: Author) {
        super(name, year, author);
        author.addBook(this);
    }

    public getDescription(): string
    {
        return `Physical book "${this.name}" by ${this.author.name} (${this.year})`;
    }
}
