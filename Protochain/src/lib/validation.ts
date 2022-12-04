/**
 * Validation Class
 */
export default class Validation {
    success: boolean;
    message: string;

    /**
     * Create a new validation object
     * @param success if the validation was success
     * @param message The validation message, if the validation failed
     */
    constructor(success: boolean = true, message: string = "") {
        this.success = success;
        this.message = message;
    }

}

