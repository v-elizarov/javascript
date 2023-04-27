// ******************************
// **** Arrays destructuring ****
// ******************************
const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34]

// Skip elements ","
const [,,,, a, b, c] = fib

console.log(a, b, c)

// Matrix
const line = [[10, 17], [14, 7]]

const [ [point1x, point1y], [point2x, point2y] ] = line
console.log('point1:', point1x, point1y)
console.log('point2:', point2x, point2y)

// Default values
const people = ['Vladislav', 'Esenia']

const [d, e, f = 'Vera(default)'] = people
console.log(d, e, f)

// Rest Elements
const [g, ...otherNames] = people
console.log(g, otherNames)

const dictionary = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
}

// How to get animals that say 'squeak'?
// Object.entries() takes object return matrix [[key, value], [key, value]]
const result = Object.entries(dictionary)
    //.filter((array) => array[1] === 'squeak')
    //.filter(([key, value]) => value === 'squeak')
    .filter(([, value]) => value === 'squeak')
    .map(([key]) => key)
console.log(result)

// Combination
// Example 2.
const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
}

const { coordinates: 
    { start: [startX, startY], 
        end: [endX, endY] } } = shape
console.log(startX, startY, ':', endX, endY)