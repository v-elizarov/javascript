// Class properties

class Counter {
    count;
    static incrementStep = 3

    constructor(startValue = 0) {
        this.count = startValue
    }

    increment = () => {
        //this.count++;
        this.count += Counter.incrementStep
        console.log(this.count)
    }

    static incrementAll = function(array) {
        array.forEach((number) => number > 0)
    }
}

Counter.incrementAll([4, 5, 6])
const counter = new Counter();
counter.increment()
setTimeout(counter.increment, 1000)