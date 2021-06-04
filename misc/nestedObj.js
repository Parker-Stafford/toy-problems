// Given a nested dictionary (object or hashmap), the task is to convert this dictionary into a flattened dictionary where the key is separated by '.' in case of the nested key to be started.
// Example input:
// {
//   "a": 2,
//   "b": 3,
//   "c": {
//     "d": 1,
//     "e": {
//       "f": 4
//     }
//   }
// }
// Expected output:
// {'a': 2, 'b': 3, 'c.d': 1, 'c.e.f': 4}


function flattenDict(obj) {
  const result = {};

  function traverser(curKey, obj) {
    for (const key in obj) {
      let value = obj[key];
      if (typeof value === 'number') {
        if (curKey.length) {
          curKey += `.${key}`;
          result[curKey] = value;
          curKey = curKey.slice(0, curKey.length - 2);
        } else {
          result[key] = value;
        }
      } else {
        if (curKey.length) {
          traverser(curKey + `.${key}`, value);
        } else {
          traverser(key, value);
        }
      }
    }
  }
  traverser('', obj);
  return result;
}






