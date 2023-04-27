// *******************************
// **** Objects destructuring ****
// *******************************
// get value from a data-structure, object, array

// Example 1.
const person = {
    firstName: 'Vladislav',
    lastName: 'Elizarov',
    age: 27
}
// Old method
// const firstName = person.firstName;
// const lastName = person.lastName;

// Destructuring
const { firstName, lastName } = person;
console.log(firstName, lastName)

// Example 2.
const modifyPerson = {
    name: {
        first: 'Vladislav',
        last: 'Elizarov',
    },
    age: 27,
    // role: 'user'
}
// !consts names must be equal fieds names
// consts may be renamed with -> field: @alias
const { name: { first: userName, last: userLastName } } = modifyPerson;
console.log(userName, userLastName) 

// defaul values
const { role = 'guest' } = modifyPerson
console.log(role)

// we can set default value global for all object (obj {...} = {})
// after get fields or create fields with default values in it
const { permissions: {subRole = 'admin'} = {} } = modifyPerson
console.log(subRole)

// Function arguments Destructuring
function connect({ 
    host = 'localhost',
    port = 27015,
    user = 'guest'} = {}) {
    console.log('user:', user, 'host:', host, 'port:', port)
}

connect()
// connect({ port: 11111 })

// Rest element
const dictionary = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
}

const { duck, ...otherAnimals } = dictionary
// Where otherAnimals is the Rest element
// Rules: Rest parameter = Rest element

console.log(duck)
console.log(otherAnimals)