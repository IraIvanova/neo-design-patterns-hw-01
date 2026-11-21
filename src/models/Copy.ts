
import {AbstractBook} from "./AbstractBook";

export class Copy {
  private isAvailable: boolean = true;

  constructor(private readonly _book: AbstractBook) {
  }

  get book(): AbstractBook {
      return this._book;
  }

  public setAvailability(isAvailable: boolean) {
     this.isAvailable = isAvailable;
  }

  public isCopyAvailable(): boolean
  {
      return this.isAvailable;
  }
}
