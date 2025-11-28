//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = () => {
  let secondes = 1000000000;
  let date = new Date(
    gigasecond.setSeconds(gigasecond.getSeconds() + secondes)
  );
  return date;
};
