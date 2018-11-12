'use strict';

let List = require('../lib/list.js');

describe('list Module', () => {

  it('the getLength method returns the length of an array', () => {
    let myList = new List();

    expect(myList.getLength(['dog', 'cool'])).toBe(2);
  });

  it('push() adds an element to the end of the list', () => {
    let myList = new List();
    expect(myList.push('pizza', ['dog', 'cool'])).toEqual(['dog', 'cool', 'pizza']);
  });

  it('unshift() adds the element to the beginning of the array', () => {
    let myList = new List();
    expect(myList.unshift(['dog', 'cool'], 'lasagna')).toEqual(['lasagna', 'dog', 'cool']);
  });


  it('pop() removes the last element from the list', () => {
    let myList = new List();
    expect(myList.pop(['dog', 'cool', 'lasagna'])).toBe('lasagna');
  });

  describe('testing the map method', () => {
    xit('should return [2, 4, 6]', () => {
      let result = List.map([1, 2, 3], n => n * 2);
      expect(result).toEqual([2, 4, 6]);
    });
    xit('should throw an invalid error', () => {

    });


  });

});