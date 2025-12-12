// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const defaultTime = 2.5;
  switch (name) {
    case "Pure Strawberry Joy":
      return Number(0.5);
      break;
    case "Energizer":
      return Number(1.5);
      break;
    case "Green Garden":
      return Number(1.5);
      break;
    case "Tropical Island":
      return Number(3);
      break;
    case "All or Nothing":
      return Number(5);
      break;
    default:
      return defaultTime;
      break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let numberlimes = 0;
  let i = 0;
  if (limes.length == 0) {
    return 0;
  }
  while (wedgesNeeded > numberlimes) {
    if (limes[0 + i] == "small") {
      numberlimes = numberlimes + 6;
      i = i + 1;
      if (i == limes.length) {
        break;
      }
    } else if (limes[0 + i] == "medium") {
      numberlimes = numberlimes + 8;
      i = i + 1;
      if (i == limes.length) {
        break;
      }
    } else if (limes[0 + i] == "large") {
      numberlimes = numberlimes + 10;
      i = i + 1;
      if (i == limes.length) {
        break;
      }
    }
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft = timeLeft - timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
