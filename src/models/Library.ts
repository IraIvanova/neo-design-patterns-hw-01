import {Author} from "./Author";
import {AbstractBook} from "./AbstractBook";
import {Copy} from "./Copy";
import {Reader} from "./Reader";

export class Library {
    private authors: Author[] = [];
    private books: AbstractBook[] = [];
    private copies: Copy[] = [];
    private readers: Reader[] = [];

    public addBook(book: AbstractBook) {
        this.books.push(book);
    }

    public addAuthor(author: Author) {
        this.authors.push(author);
    }

    public addCopy(copy: Copy) {
        this.copies.push(copy);
    }

    public addReader(reader: Reader): boolean {
        if (this.readers.some((r: Reader) => r.id === reader.id)) {
            return false;
        }

        this.readers.push(reader);

        return true;
    }

    public getAvailableCopies(): Copy[] {
        return this.copies.filter((copy: Copy) => copy.isCopyAvailable());
    }

    public booksByAuthor(author: string): AbstractBook[] {
        return this.books.filter((b: AbstractBook) => b.author.name === author);
    }
}
