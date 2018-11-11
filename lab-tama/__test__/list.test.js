'use strict';

let List = require('../lib/list.js');

describe('list Module', () => {

  it('the getLength method returns the length of an array', () => {
    let myList = new List();

    expect(myList.getLength(['dog', 'cool'])).toBe(2);
  });
 
  xit('push() returns the updated length of the list', () => {
    let myList = new List();
    myList.push('FOO');

    expect(myList.length).toBe(1);
  });

  xit('push() adds an element to the end of the list', () => {
    let myList = new List();
    myList.push('foo');
    expect(myList[myList.length-1]).toEqual('foo');
  });

  xit('pop() removes the last element from the list', () => {
    let myList = new List();
    myList.pop('FOO');
    expect(myList.length).toBe(0);
  });

  describe('testing the map method', () => {
   xit('should return [2, 4, 6]', () => {
      let result = List.map ([1, 2, 3], n => n * 2);
      expect (result).toEqual([2, 4, 6]);
    });
    xit('should throw an invalid error', () => {

    });


  });

});