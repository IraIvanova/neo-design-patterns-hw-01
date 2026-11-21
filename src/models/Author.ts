import {Book} from "./Book";

export class Author {
  private books: Book[] = [];

  constructor(private readonly _name: string) {
  }

  get name(): string {
    return this._name;
  }

  public addBook(book: Book) {
    this.books.push(book);
  }
}
