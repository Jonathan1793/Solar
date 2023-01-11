// see e16.md

export function find(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  } /*  I guess if the value was not true for any of the elements
   inside the array we return undefined once it finish with the loop */
  return undefined;
}
