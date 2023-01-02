const math = require('./index');

test('Check for Sum',()=>{expect(math.sum(4,5)).toBe(9)});
test('Check for Difference',()=>{expect(math.diff(5,4)).toBe(1)});
test('Check for Product',()=>{expect(math.product(4,5)).toBe(20)});