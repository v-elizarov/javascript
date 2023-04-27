// let & const
// always create const variable,
// if I need to change value, then let
let userName = 'Vladislav';
userName = 'Esenia';

const userNames = ['Vladislav', 'Esenia'];
// userNames = [] // Error, trying to assign new value to const

userNames.push('Maria');
console.log(userNames);

const person = {
    name: 'Vladislav',
    age: 27
};

person.name = 'Esenia';
console.log(person);

// the visibility area of var
// is the all space of a function

if (true) {
    let number = 1;
}
// console.log(number); // number is not defined

// for (var i = 0; i < 3; i++) { // 3, 3, 3
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000);
}