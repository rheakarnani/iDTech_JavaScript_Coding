var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

test('outputs the correct string', () => {
  expect(Greet(RHEA)).toBe("HELLO RHEA!");
});