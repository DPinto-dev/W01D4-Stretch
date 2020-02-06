const assertEqual = require('../../lotide/assertEqual');

// Implement the callback funtion for a map method that, when applied to an array should be return an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).
// z^2 = x^2 + y^2.

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// Calculates z
const result = input.map(ob => Math.sqrt(ob.x ** 2 + ob.y ** 2));


// TESTS
assertEqual(result[0], 5);
assertEqual(result[1], 13);
assertEqual(result[2], 17);
