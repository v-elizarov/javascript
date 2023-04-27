// Prototypes
// see assets: 11-prototypes.png
const animal = {
    say: function() {
        console.log(this.name, 'goes', this.voice)
    }
}
// Example 1.
// const dog = {
//     name: 'dog',
//     voice: 'woof',
// }

// // Warning: optimization
// Object.setPrototypeOf(dog, animal)

// Example 2.
// const dog = Object.create(animal)
// dog.name = 'Dog'
// dog.voice = 'woof'
// dog.say()

// Example 3.
function createAnimal(name, voice) {
    const target = Object.create(animal)
    target.name = name
    target.voice = voice  
    return target
}

const cat = {
    name: 'cat',
    voice: 'meow',
}

const bird = {
    name: 'bird',
    voice: 'tweet',
}

const dogViaCreateAnimal = createAnimal('Dog', 'woof')
const catViaCreateAnimal = createAnimal('Cat', 'meow')
catViaCreateAnimal.say()

// Example 4.
function Animal(name, voice) {
    this.name = name
    this.voice = voice
}

// Add function to prototype `say()`
Animal.prototype.say = function() {
    console.log(this.name, 'goes', this.voice)
}

const dogViaConstructorAnimal = new Animal('Dog', 'woof')
dogViaConstructorAnimal.say()
const catViaConstructorAnimal = new Animal('Cat', 'meow')
catViaConstructorAnimal.say()

// Resume
// 1. Object.setPrototypeOf (bad)
// 2. Object.create (legacy)
// 3. using new (better one)

// Create Object without any prototype
const obj = Object.create(null)
console.log(obj.toString()) // Error