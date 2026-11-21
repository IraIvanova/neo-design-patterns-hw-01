import {Reader} from "../models/Reader";
import {Copy} from "../models/Copy";

export class BorrowService {
    public borrow(reader: Reader, copy: Copy): boolean {
        if (copy.isCopyAvailable()) {
            reader.addCopy(copy);
            copy.setAvailability(false);

            return true;
        }

        return false;
    }

    public returnBook(reader: Reader, copy: Copy) {
        const returned = reader.returnCopy(copy);

        if (!returned) return false;

        copy.setAvailability(true);

        return true;
    }
}
