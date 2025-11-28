// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let length = array1.length - 1;
  let test = 0;
  let test2 = 0;
  let length2 = array2.length - 1;
  array1.forEach((element) => {
    let number = Math.pow(10, length);
    element = element * number;
    test = test + element;
    length--;
  });
  array2.forEach((element2) => {
    let number2 = Math.pow(10, length2);
    element2 = element2 * number2;
    test2 = test2 + element2;
    length2--;
  });
  return test2 + test;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reverseNum = 0;
  let temp = value;

  while (temp != 0) {
    let digit = temp % 10;
    let number = Math.floor(digit);
    if (number == 0) {
      break;
    } else {
      reverseNum = reverseNum * 10 + number;
      temp = temp / 10;
    }
  }
  if (value == reverseNum) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Boolean(input)) {
    if (!Number(input)) {
      return "Must be a number besides 0";
    } else {
      return "";
    }
  } else {
    return "Required field";
  }
}
