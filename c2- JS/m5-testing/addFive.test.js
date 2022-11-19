





const { default: TestRunner } = require("jest-runner");
const addFive= require('./addFive');
const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});
// Write the second test
test('return the number plus 5', () =>{
    expect(addFive(1)).toBe(6);
})

