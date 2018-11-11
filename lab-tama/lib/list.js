'use strict';

class List {
  constructor () {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }

  pop(item) {
    this[this.length++] = item;
    return this.length;
  }

  getLength(array) {
    let counter = 0;
    array.forEach(() =>
      counter++
    );
    return counter;
  }
}

module.exports = List;

