var assert = require('assert');
const { sayHello } = require('..');
const retMinusOne = require('../index').sayHello;


  describe('app should return hallo', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(sayHello(),'hello');
    });
  });
