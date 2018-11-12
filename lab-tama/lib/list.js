'use strict';

class List {
  constructor () {
    this.length = 0;
  }

  getLength(array) {
    let counter = 0;
    array.forEach(() =>
      counter++
    );
    return counter;
  }

  push(item, array) {
    return [...array, item];
  }

  unshift(array, item) {
    return [item, ...array];
  }

  pop(array) {
    let poppedValue = array[array.length - 1];
    delete array[array.length - 1];
    return poppedValue;
  }

}

module.exports = List;

