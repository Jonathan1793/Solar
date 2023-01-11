export function minBy(array, cb) {
  let minValue = 0;
  let res = "";
  if (array.length === 0) {
    return undefined;
  } else {
    minValue = cb(array[0]);
  }
  for (let element of array) {
    if (cb(element) < minValue) {
      minValue = cb(element);
      res = element;
    }
  }
  return res;
}

export function maxBy(array, cb) {
  let res = "";
  let maxValue = 0;
  if (array.length === 0) {
    return undefined;
  } else {
    maxValue = cb(array[0]);
    for (let element of array) {
      if (cb(element) > maxValue) {
        maxValue = cb(element);
        res = element;
      }
    }
    return res;
  }
}
