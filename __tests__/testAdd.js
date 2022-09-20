'use strict';

const add = require('../add.js');

describe('testing our add function', () => {
  test('should be able to add 2 and 3', () => {
    expect(add(2, 3)).toEqual(5);
  });
}); 
