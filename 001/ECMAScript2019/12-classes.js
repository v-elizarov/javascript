// Classes
// just syntax on prototypes in JS

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice
    }

    say() {
        // super.say()
        console.log(this.name, 'goes', this.voice)
    }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice)
        super.say()
        this.canFly = canFly
    }

    say() {
        // this.say()
        console.log('Birds don\'t like to talk')
    }
}

const duck = new Bird('Duck', 'quack', true)
duck.say()