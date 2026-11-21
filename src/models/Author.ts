import {AbstractBook} from "./AbstractBook";

export class Author {
  private books: AbstractBook[] = [];

  constructor(private readonly _name: string) {
  }

  get name(): string {
    return this._name;
  }

  public addBook(book: AbstractBook) {
    this.books.push(book);
  }
}
