# common-validations

![NPM Version](https://img.shields.io/npm/v/common-validations)
![NPM License](https://img.shields.io/npm/l/common-validations)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/common-validations)


This library provides a collection of utility functions to validate various types of data including URLs, email addresses, phone numbers, IPv4 addresses, MAC addresses, ISO 8601 dates, credit card numbers, and strong passwords. Each function utilizes regular expressions to perform the validation.

## Installation

```
npm i common-validations
```

## Usage

Import the desired function from the library and use it to validate your data:

```javascript
import { isURL, isEmail, isPhone, isIPv4, isMAC, isISODate, isCreditCard, isStrongPassword } from 'common-validations';

console.log(isURL('https://example.com')); // true
console.log(isEmail('user@example.com')); // true
console.log(isPhone('+1-800-555-1234')); // true
console.log(isIPv4('192.168.1.1')); // true
console.log(isMAC('00:1A:2B:3C:4D:5E')); // true
console.log(isISODate('2023-04-05')); // true
console.log(isCreditCard('4111111111111111')); // true
console.log(isStrongPassword('Aa1@strong')); // true
```

## API Reference

### `isURL(url: string): boolean`

Validates whether the given string is a valid URL.

*   **Parameter:** `url` - The URL string to validate.
*   **Returns:** `true` if the string is a valid URL, `false` otherwise.

```javascript
// Example
isURL('https://example.com'); // true
isURL('invalid-url'); // false
```

### `isEmail(email: string): boolean`

Validates whether the given string is a valid email address.

*   **Parameter:** `email` - The email address string to validate.
*   **Returns:** `true` if the string is a valid email address, `false` otherwise.

```javascript
// Example
isEmail('user@example.com'); // true
isEmail('user@example'); // false
```

### `isPhone(phoneNum: string): boolean`

Validates whether the given string is a valid phone number.

*   **Parameter:** `phoneNum` - The phone number string to validate.
*   **Returns:** `true` if the string is a valid phone number, `false` otherwise.

```javascript
// Example
isPhone('+1-800-555-1234'); // true
isPhone('123-abc-7890'); // false
```

### `isIPv4(ip: string): boolean`

Validates whether the given string is a valid IPv4 address.

*   **Parameter:** `ip` - The IPv4 address string to validate.
*   **Returns:** `true` if the string is a valid IPv4 address, `false` otherwise.

```javascript
// Example
isIPv4('192.168.1.1'); // true
isIPv4('999.999.999.999'); // false
```

### `isMAC(mac: string): boolean`

Validates whether the given string is a valid MAC address.

*   **Parameter:** `mac` - The MAC address string to validate.
*   **Returns:** `true` if the string is a valid MAC address, `false` otherwise.

```javascript
// Example
isMAC('00:1A:2B:3C:4D:5E'); // true
isMAC('00-1A-2B-3C-4D-5E-GH'); // false
```

### `isISODate(date: string): boolean`

Validates whether the given string is a valid ISO 8601 date.

*   **Parameter:** `date` - The ISO 8601 date string to validate.
*   **Returns:** `true` if the string is a valid ISO 8601 date, `false` otherwise.

```javascript
// Example
isISODate('2023-04-05'); // true
isISODate('2023-13-01'); // false
```

### `isCreditCard(card: string): boolean`

Validates whether the given string is a valid credit card number.

*   **Parameter:** `card` - The credit card number string to validate.
*   **Returns:** `true` if the string is a valid credit card number, `false` otherwise.

```javascript
// Example
isCreditCard('4111111111111111'); // true
isCreditCard('1234567812345678'); // false
```

### `isStrongPassword(password: string): boolean`

Validates whether the given string is a strong password.

*   **Parameter:** `password` - The password string to validate.
*   **Returns:** `true` if the password meets the strong password criteria, `false` otherwise.

A strong password typically includes a mix of:

*   At least one lowercase letter
*   At least one uppercase letter
*   At least one numeric digit
*   At least one special character from \[@ $ ! % \* ? &\]
*   A minimum length of 8 characters

```javascript
// Example
isStrongPassword('Aa1@strong'); // true
isStrongPassword('weakpass'); // false
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Happy validating!