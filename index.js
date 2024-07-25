function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection) === false) {
          break;
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (callback(collection[key], key, collection) === false) {
            break;
          }
        }
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(value, key, col) {
      result.push(callback(value, key, col));
    });
    return result;
  }
  function myReduce(collection, callback, acc) {
    let isArray = Array.isArray(collection);
    let start = 0;
  
    if (!acc) {
      acc = isArray ? collection[0] : Object.values(collection)[0];
      start = isArray ? 1 : 1;
    }
  
    for (let i = start; i < (isArray ? collection.length : Object.keys(collection).length); i++) {
      const key = isArray ? i : Object.keys(collection)[i];
      const value = isArray ? collection[i] : collection[key];
      acc = callback(acc, value, collection);
    }
  
    return acc;
  }
  function myFind(collection, predicate) {
    let found;
    myEach(collection, function(value, key, col) {
      if (predicate(value, key, col)) {
        found = value;
        return false; 
      }
    });
    return found;  
  }
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(value, key, col) {
      if (predicate(value, key, col)) {
        result.push(value);
      }
    });
    return result;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  function mySortBy(array, callback) {
    return array.slice().sort(function(a, b) {
      return callback(a) - callback(b);
    });
  }
  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          newArr.push(...array[i]);
        } else {
          newArr.push(array[i]);
        }
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          myFlatten(array[i], false, newArr);
        } else {
          newArr.push(array[i]);
        }
      }
    }
    return newArr;
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(object) {
    return Object.values(object);
  }
                           