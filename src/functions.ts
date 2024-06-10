const URL_REGEX = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})+([\/\w .-]*)*\/?$/i;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?(\d{1,3})?[-.\s]?(\(\d{1,4}\)|\d{1,4})?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const IPv4_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const MAC_REGEX = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
const ISODATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const CREDITCARD_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
const STRONGPASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/**
 * Validates whether the given string is a valid URL.
 *
 * A valid URL optionally starts with `http://` or `https://`, followed by a valid domain name,
 * which may include subdomains, and an optional path.
 *
 * @param {string} url - The URL string to validate.
 * @returns {boolean} - Returns `true` if the string is a valid URL, `false` otherwise.
 *
 * @example
 * // Returns true
 * isURL('https://example.com');
 *
 * @example
 * // Returns false
 * isURL('invalid-url');
 */
export function isURL(url: string): boolean {
    return URL_REGEX.test(url);
}

/**
 * Validates whether the given string is a valid email address.
 *
 * A valid email address contains an alphanumeric local part, an `@` symbol, and a domain name
 * which includes a top-level domain.
 *
 * @param {string} email - The email address string to validate.
 * @returns {boolean} - Returns `true` if the string is a valid email address, `false` otherwise.
 *
 * @example
 * // Returns true
 * isEmail('user@example.com');
 *
 * @example
 * // Returns false
 * isEmail('user@example');
 */
export function isEmail(email: string): boolean {
    return EMAIL_REGEX.test(email);
}

/**
 * Checks whether the given value is a number.
 *
 * The function returns `true` if the value is a finite number, otherwise `false`.
 * This function handles various input types including numbers and numeric strings.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a number, `false` otherwise.
 *
 * @example
 * // Returns true
 * isNumber(123);
 *
 * @example
 * // Returns true
 * isNumber('123');
 *
 * @example
 * // Returns false
 * isNumber('abc');
 */
export function isNumber(value: any): boolean {
    return !isNaN(value);
}

/**
 * Validates whether the given string is a valid phone number.
 *
 * A valid phone number may start with an optional `+` and country code, followed by groups of digits
 * that may be separated by spaces, dashes, or dots. It may also contain optional area codes in parentheses.
 *
 * @param {string} phoneNum - The phone number string to validate.
 * @returns {boolean} - Returns `true` if the string is a valid phone number, `false` otherwise.
 *
 * @example
 * // Returns true
 * isPhone('+1-800-555-1234');
 *
 * @example
 * // Returns false
 * isPhone('123-abc-7890');
 */
export function isPhone(phoneNum: string): boolean {
    return PHONE_REGEX.test(phoneNum);  
}

/**
 * Validates whether the given string is a valid IPv4 address.
 *
 * A valid IPv4 address consists of four decimal numbers (0-255) separated by dots.
 *
 * @param {string} ip - The IPv4 address string to validate.
 * @returns {boolean} - Returns `true` if the string is a valid IPv4 address, `false` otherwise.
 *
 * @example
 * // Returns true
 * isIPv4('192.168.1.1');
 *
 * @example
 * // Returns false
 * isIPv4('999.999.999.999');
 */
export function isIPv4(ip: string): boolean {
    return IPv4_REGEX.test(ip);
}

/**
 * Validates whether the given string is a valid MAC address.
 *
 * A valid MAC address consists of six groups of two hexadecimal digits, separated by colons or dashes.
 *
 * @param {string} mac - The MAC address string to validate.
 * @returns {boolean} - Returns `true` if the string is a valid MAC address, `false` otherwise.
 *
 * @example
 * // Returns true
 * isMAC('00:1A:2B:3C:4D:5E');
 *
 * @example
 * // Returns false
 * isMAC('00-1A-2B-3C-4D-5E-GH');
 */
export function isMAC(mac: string): boolean {
    return MAC_REGEX.test(mac);
}

/**
 * Validates whether the given string is a valid ISO 8601 date.
 *
 * A valid ISO 8601 date follows the format `YYYY-MM-DD`.
 *
 * @param {string} date - The ISO 8601 date string to validate.
 * @returns {boolean} - Returns `true` if the string is a valid ISO 8601 date, `false` otherwise.
 *
 * @example
 * // Returns true
 * isISODate('2023-04-05');
 *
 * @example
 * // Returns false
 * isISODate('2023-13-01');
 */
export function isISODate(date: string): boolean {
    return ISODATE_REGEX.test(date);
}

/**
 * Validates whether the given string is a valid credit card number.
 *
 * A valid credit card number matches the major credit card formats (Visa, MasterCard, American Express, etc.).
 * This function checks for typical patterns used by credit cards.
 *
 * @param {string} card - The credit card number string to validate.
 * @returns {boolean} - Returns `true` if the string is a valid credit card number, `false` otherwise.
 *
 * @example
 * // Returns true
 * isCreditCard('4111111111111111'); // Visa
 *
 * @example
 * // Returns false
 * isCreditCard('1234567812345678');
 */
export function isCreditCard(card: string): boolean {
    return CREDITCARD_REGEX.test(card);
}

/**
 * Validates whether the given string is a strong password.
 *
 * A strong password is defined as one that contains:
 * - At least one lowercase letter
 * - At least one uppercase letter
 * - At least one numeric digit
 * - At least one special character from [@ $ ! % * ? &]
 * - A minimum length of 8 characters
 *
 * @param {string} password - The password string to validate.
 * @returns {boolean} - Returns `true` if the password is strong, `false` otherwise.
 *
 * @example
 * // Returns true
 * isStrongPassword('Aa1@strong');
 *
 * @example
 * // Returns false
 * isStrongPassword('weakpass');
 */
export function isStrongPassword(password: string): boolean {
    return STRONGPASSWORD_REGEX.test(password);
}
