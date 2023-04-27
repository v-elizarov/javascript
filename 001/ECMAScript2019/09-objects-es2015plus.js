// Objects in ES-2015+

// Point
const x = 10
const y = 33

// ES5
const point = {
    x: x,
    y: y,

    draw: function() {
        // ...
    }
}

// After
const pointES6 = {
    x, 
    y,
    // this is common function, not for Arrow
    draw(ctx) {
        // ...
    }
}

// Create dynamic keys
// Example 1.
const prefix = '_prefix_'

const data = {
    [prefix + 'name']: 'Vladislav',
    [prefix + 'age']: 27,
}

console.log(data)

// Copy objects
// Example 2.
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
}

const options = {
    user: 'john',
    password: 'utopia'
}

// defaults will be modify ->
// with all keys and values from options
Object.assign(defaults, options)
// result new defaults
console.log(defaults)

const returnedObject = Object.assign({}, defaults, options)
// Object defaults will not changed
// Only first argument of the assign function will modify
console.log(returnedObject)

// Copy object
const person = {
    name: 'Vladislav',
    friends: [] // :(
}

const shallowCopy = Object.assign({}, person)
console.log(person)
person.friends.push('Lera')
// shallowCopy contains link to person object, also shows new friend
console.log(person) 
