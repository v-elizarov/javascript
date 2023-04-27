// Rest parameter

max(1, 3);
max(1, 3, 3, 5, 4);

restMax(1, 3);
restMax(1, 3, 3, 5, 4);
restMax(); // not be undefined, return [] (empty array)

function max() {
    // pseudo-array
    // arguments
    // convert to array
    var numbers = Array.prototype.slice.call(arguments);
    console.log(numbers);
}

// Rest-parameter must be last argument in a function
// Only one rest-parameter per function
function restMax(...numbers) {
    console.log(numbers);
}