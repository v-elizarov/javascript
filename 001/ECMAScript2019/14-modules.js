// Modules in JavaScript
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

// Or here
export default class Graph {
    addNode() {
        console.log('node added')
    }
}

const PI = 3.1415

// Named export
export {
    add, subtract, multiply, divide
}

// Here
// export default Graph