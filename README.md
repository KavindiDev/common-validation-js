# Common Validations Library

![NPM Version](https://img.shields.io/npm/v/common-validations)
![NPM License](https://img.shields.io/npm/l/common-validations)
![NPM Downloads](https://img.shields.io/npm/dt/common-validations)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/common-validations)

`common-validations` is a lightweight library providing a suite of utility functions to validate various data types. The library includes functions for validating URLs, email addresses, phone numbers, IPv4 addresses, MAC addresses, ISO 8601 dates, credit card numbers, and strong passwords. Each function employs regular expressions to validate the input string against the corresponding data type. The library is designed to be simple, efficient, and easy to use, making it ideal for validating user input in web applications, APIs, and other software projects.

## Installation

```bash
npm install common-validations
```

## Usage

Import the necessary functions from the library and use them to validate your data:

```javascript
import Validator, {
isURL,
isEmail,
isPhone,
isIPv4,
isMAC,
isISODate,
isCreditCard,
isStrongPassword,
} from "common-validations";

console.log(Validator.isURL("https://example.com")); //true
console.log(isEmail("user@example.com")); //true
console.log(isPhone("+1-800-555-1234")); //true
console.log(isIPv4("192.168.1.1")); //true
console.log(isMAC("00:1A:2B:3C:4D:5E")); //true
console.log(isISODate("2023-04-05")); //true
console.log(isCreditCard("4111111111111111")); //true
console.log(isStrongPassword("Aa1@strong")); //true
```

## API Reference

The Validator object is the primary entry point for the library, encompassing validation functions for various data types.

Each function accepts a string as input and returns a boolean indicating whether the input meets the validation criteria.

## Detailed Documentation

### Validator Object

The Validator object includes the following functions:

- [isURL](#isurl) - isURL(url: string): boolean
- [isEmail](#isemail) - isEmail(email: string): boolean
- [isPhone](#isphone) - isPhone(phoneNum: string): boolean
- [isIPv4](#isipv4) - isIPv4(ip: string): boolean
- [isMAC](#ismac) - isMAC(mac: string): boolean
- [isISODate](#isisodate) - isISODate(date: string): boolean
- [isCreditCard](#iscreditcard) - isCreditCard(card: string): boolean
- [isStrongPassword](#isstrongpassword) - isStrongPassword(password: string): boolean

#### Example

You can use the default import to access the Validator object and its functions:

```javascript
import Validator from "common-validations";

console.log(Validator.isURL("https://example.com")); //true
console.log(Validator.isURL("invalid-url")); //false
```

Or you can import individual functions directly:

```javascript
import { isURL } from "common-validations";
console.log(isURL("https://example.com")); //true
```

### isURL

Validates if the provided string is a valid URL.

- Parameter: url - The URL string to validate.
- Returns: true if the string is a valid URL, false otherwise.

```javascript
Example isURL('https://example.com'); // true
isURL('invalid-url'); // false 
```

### isEmail

Validates if the provided string is a valid email address.

- Parameter: email - The email address string to validate.
- Returns: true if the string is a valid email address, false otherwise.

```javascript
isEmail('user@example.com'); // true
isEmail('user@example'); // false
```

### isPhone

Validates if the provided string is a valid phone number.

- Parameter: phoneNum - The phone number string to validate.
- Returns: true if the string is a valid phone number, false otherwise.

```javascript
isPhone('+1-800-555-1234'); //true
isPhone('123-abc-7890'); //false
```

### isIPv4

Validates if the provided string is a valid IPv4 address.

- Parameter: ip - The IPv4 address string to validate.
- Returns: true if the string is a valid IPv4 address, false otherwise.

```javascript
isIPv4('192.168.1.1'); //true
isIPv4('999.999.999.999'); //false
```

### isMAC

Validates if the provided string is a valid MAC address.

- Parameter: mac - The MAC address string to validate.
- Returns: true if the string is a valid MAC address, false otherwise.

```javascript
isMAC('00:1A:2B:3C:4D:5E'); //true
isMAC('00-1A-2B-3C-4D-5E-GH'); //false
```

### isISODate

Validates if the provided string is a valid ISO 8601 date.

- Parameter: date - The ISO 8601 date string to validate.
- Returns: true if the string is a valid ISO 8601 date, false otherwise.

```javascript
isISODate('2023-04-05'); //true
isISODate('2023-13-01'); //false
```

### isCreditCard

Validates if the provided string is a valid credit card number.

- Parameter: card - The credit card number string to validate.
- Returns: true if the string is a valid credit card number, false otherwise.

```javascript
isCreditCard('4111111111111111'); //true
isCreditCard('1234567812345678'); //false
```

### isStrongPassword

Validates if the provided string is a strong password.

- Parameter: password - The password string to validate.
- Returns: true if the password meets the strong password criteria, false otherwise.

A strong password typically includes a mix of:

- At least one lowercase letter
- At least one uppercase letter
- At least one numeric digit
- At least one special character from [@ $ ! % * ? &]
- A minimum length of 8 characters

```javascript
isStrongPassword('Aa1@strong'); //true 
isStrongPassword('weakpass'); //false
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute.

## License

This library is licensed under the MIT License. See the LICENSE file for details.

Happy validating!
