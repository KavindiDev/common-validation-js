import {
  isCreditCard,
  isEmail,
  isIPv4,
  isISODate,
  isMAC,
  isNumber,
  isPhone,
  isStrongPassword,
  isURL,
} from "./functions.js";

/**
 * Collection of validation functions.
 */
const Validator = {
  isURL,
  isEmail,
  isNumber,
  isPhone,
  isIPv4,
  isMAC,
  isISODate,
  isCreditCard,
  isStrongPassword,
};

export {
  Validator as default,
  isCreditCard,
  isEmail,
  isIPv4,
  isISODate,
  isMAC,
  isNumber,
  isPhone,
  isStrongPassword,
  isURL,
};
