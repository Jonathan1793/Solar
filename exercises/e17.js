export function minBy(array, cb) {
  let minValue = 0;
  if (array.length === 0) {
    return undefined;
  } else {
    minValue = cb(array[0]);
  }
  for (let element of array) {
    if (cb(element) < minValue) {
      minValue = cb(element);
      return element;
    }
  }
}

export function maxBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  } else {
    let maxValue = cb(array[0]);
    for (let element of array) {
      if (cb(element) > maxValue) {
        maxValue = cb(element);
        return element;
      } else {
        continue;
      }
    }
  }
}
