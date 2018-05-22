'use strict';

let List = require('../lib/list.js');

describe('list Module', () => {

  it('push() returns the updated length of the list', () => {
    let myList = new List();
    myList.push('FOO');

    expect(myList.length).toBe(1);
  });

  it('push() adds an element to the end of the list', () => {
    let myList = new List();
    myList.push('foo');
    expect(myList[myList.length-1]).toEqual('foo')
  });

  it('pop() the last element from the list', () => {

  });

});