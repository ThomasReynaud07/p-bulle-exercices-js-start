// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let same = 0;
  stack.forEach((element) => {
    if (element == card) {
      same++;
    }
  });
  return Number(same);
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let oddCards = 0;
  let evenCards = 0;

  for (let cards of stack) {
    if (cards % 2 == 0) {
      oddCards++;
    } else {
      evenCards++;
    }
  }
  if (type) {
    return Number(oddCards);
  } else {
    return Number(evenCards);
  }
}
