// Spread operator

const array = [1, 2, 3];
const arraySecond = [1, 2, 3];
const arrayThird = [4, 5, 6];

// Old method
const result = Math.max.apply(Math, array);
console.log(result);

// With Spread operator
// extracts values from array
// and throws these value in a function
const resultWithSpreadOperator = Math.max(...array);
console.log(resultWithSpreadOperator);

const resultWithSpreadOperatorWithTwoArrays = Math.max(41,...arraySecond, 7, ...arrayThird, 10);
console.log(resultWithSpreadOperatorWithTwoArrays);
// Shallow Copy of the current array
// arraySecond + arrayThird = [...] + [...] = [arraySecond, arrayThird]
const shallowCopy = [41,...arraySecond, 7, ...arrayThird, 10];
console.log(shallowCopy);

arraySecond.push(888);
console.log(shallowCopy);
// Will be created a new array!
console.log(arraySecond);