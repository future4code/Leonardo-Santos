import { BaseError } from "./BaseError";

export class invalidProduct extends BaseError{
    constructor() {
        super(404, "There is no product")
    }
}