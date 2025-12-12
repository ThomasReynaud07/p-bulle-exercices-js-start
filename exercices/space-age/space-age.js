//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age) => {
  const earthTime = 1.0;
  const earth = 31557600;
  const mercury = 0.2408467;
  const venus = 0.61519726;
  const mars = 1.8808158;
  const jupiter = 11.862615;
  const saturne = 29.447498;
  const uranus = 84.016846;
  const neptune = 164.79132;
  switch (planet) {
    case "earth":
      return Number((age / earth / earthTime).toFixed(2));

    case "mercury":
      return Number((age / earth / mercury).toFixed(2));

    case "venus":
      return Number((age / earth / venus).toFixed(2));

    case "mars":
      return Number((age / earth / mars).toFixed(2));

    case "jupiter":
      return Number((age / earth / jupiter).toFixed(2));

    case "saturn":
      return Number((age / earth / saturne).toFixed(2));

    case "uranus":
      return Number((age / earth / uranus).toFixed(2));

    case "neptune":
      return Number((age / earth / neptune).toFixed(2));

    default:
      throw new Error("not a planet");
  }
};
