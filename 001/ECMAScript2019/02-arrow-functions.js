// Arrow-functions
// in JavaScript functions are objects
// Features:
// a function may be an argument for other functions
// a function may be as a value for a variable
// a function may be as a result from other functions

function square(x) {
    return x * x;
}

const arrowFunction = (x) => x * x;
const arrowFunctionWithOneArgument = x => x * x;
console.log(arrowFunction(5));

const array = ['1', '5', '2', '4', '6', '3', '7'];

// .map() function replace each value with return
// .map() return new array
const result = array
    .map((item) => parseInt(item)) // convert values to int
    .filter((number) => number % 2) // array will content values which filter func return true
    .reduce((maxNumber, currentNumber) => Math.max(maxNumber, currentNumber));
console.log(result);

const legacy = array
    .map(function(item) {
        return parseInt(item);
    })
    .filter(function(number) {
        return number % 2;
    })
    .reduce(function(maxNumber, currentNumber) {
        return Math.max(maxNumber, currentNumber);
    });
console.log(legacy);

/**
 * 
 * @param {*} Number
 * @returns Number * Number
 */
const hugeArrowFunctionWhereReturnIsNecessary = (x) => {
    return x * x;
};

const greeter = {

    greet: function(name) {
        console.log('Yo', name);
    },

    greetEveryone: function(names) {
        // here we can use this.greet
        names.forEach(function(name) { // this.greet is not a func
            // here we can't use this.greet
            this.greet(name); // this.greet is not a func
        });
    },

    greetEveryoneWithArrowFunction: function(names) {
        // here we can use this.greet
        names.forEach((name) => {
            // and also here.. 
            // Arrow function saves lexical meaning for this
            this.greet(name); 
        });
    }
};
// Output:
// Yo Vladislav
// Yo Esenia
greeter.greetEveryoneWithArrowFunction(['Vladislav', 'Esenia']);

// Arrow functions hasn't property -> prototype
// OOP in JavaScript
function Person() {

}

Person.prototype.sayHello = function() {
    console.log('Hi!');
}

const ArrowPerson = () => {

};

// Common Fuction
const testUser = new Person();
testUser.sayHello();

// Arrow Function
// new ArrowPerson; // ArrowPerson is not a constructor