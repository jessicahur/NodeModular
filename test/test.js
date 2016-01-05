var assert = require('assert');
var greeting = require('../greeting.js');
var testBase = 'Hello Jessica';
describe('check result', function(){
  //testing logic first
  it('should return Hello Jessica', function(){
    var myObj = {
      greet: function(name){
        return 'Hello '+name;
      }
    };
    var output = myObj.greet('Jessica');
    assert.equal(output, testBase, 'test fails');
  });
  //testing if importing module works
  it('should return Hello Jessica', function(){
    var result = greeting.greet('Jessica');
    assert.equal(result, testBase, 'import fails');
  });
});
