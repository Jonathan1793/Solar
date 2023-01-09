import { data } from "../data/data";
import { maxBy } from "../exercises/e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  const asteroids = data.asteroids;

  const asteroidCount = asteroids.reduce((acc, asteroid) => {
    acc[asteroid.discoveryYear] = acc[asteroid.discoveryYear]
      ? acc[asteroid.discoveryYear] + 1
      : 1;
    return acc;
  }, {});

  const res = Object.keys(asteroidCount).map((key) => ({
    year: key,
    count: asteroidCount[key],
  }));
  let arrAns = maxBy(res, (el) => el.count);
  return parseInt(arrAns.year);
}

getGreatestDiscoveryYear(data);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
