// Question 1. 
// ? CSS the overflow property
// управляет тем, как ведёт себя содержимое блочного элемента, если его размер превышает допустимую длину/ширину.
// если ширины и высоты блока недостаточно для размещения текста, тогда следует использовать это свойство, например для включения скрола

// Question 2.
const VALID_STATUSES = new Set(['SUCCESS', 'FINAL', 'DONE'])

const people = [
    {name: 'Max', age: 20, status: 'IN_PROGRESS'},
    {name: 'Sam', age: 21, status: 'DONE'},
    {name: 'Dan', age: 30, status: 'SUCCESS'},
]

const peopleWithValidStatus = people
    .filter(person => VALID_STATUSES.has(person.status))
    .map(person => person.name)

console.log(peopleWithValidStatus) // ['Sam', 'Dan']

// Question 3.
for (var iFirst = 0; iFirst < 10; iFirst++) {
    setTimeout(function f() {
        console.log(iFirst) // 10 ... 10
    })
}

// Question 4.
// ? DOM
// :: Объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять

// Question 5.
// ? Существует ли возможность на странице, полученной с одного домена отправить запрос на другой домен? 
// :: Да, можно воспользоваться CORS и указать на стороне сервера дополнительные заголовки HTTP запроса

// Question 6.
// ? Что делает метод stopPropagation? 
// :: Прекращает дальнейшую передачу текущего события

// Question 7.
let a = 10
a.b = 10 // undefined
console.log(a) // 10

// Question 8.
// ? Каким способом можно найти на странице элемент имеющий идентификатор 'test'
// :: document.getElementById('test')

// Question 9.
// ? Какие виды сотояния есть у promise?
// :: Promise can have three different states: pending, fullfiled, rejected. 

// Question 10.
const numbers = [-2, 4, -1, 6, 8]

const result = numbers
    .filter(n => n > 0)
    .map(n => n * 2)

console.log(result) // [8, 12, 16]

// Question 11.
// ? Что делает метод preventDefault?
// :: Отменяет действие события браузера по умолчанию

// Question 12.
let obj = {
    "0": 1, // incorrect format (like JSON)
    0: 2
}
console.log(obj["0"]) // 2
console.log(obj[0]) // 2
console.log(obj["0"] + obj[0]) // 4

// Question 13.
// ? Каким образом используя только css можно задать стили, которые применятся при наведении на элемент? 
// :: Использовать ПСЕВДОКЛАСС hover

// Question 14.
const obj1 = {
    x: 10
}

const obj2 = Object.create(obj1)

console.log(obj2.x) // 10

// Question 15.
const resultSecond = [5, 7, 9].slice(1)
// 1. slice from 1 [7, 9]
resultSecond.pop() // 2. pop the last one `9` // [7]
resultSecond.push(4) // 3. add `4` // [7, 4]
console.log(resultSecond) // [7, 4]

// Question 16.
var customObj = {
    a: () => {
        console.log(this.prop)
    },
    prop: 1
}

customObj.a() // undefined
var fn = customObj.a.bind(customObj)
fn() // undefined

// Question 17.
// ? С помощью чего можно обработать любое динамически изменяемое количество аргументов функции? 
// :: свойства arguments внутри вызванной функции
function openTheDoor() {
    var args = somehowParse(arguments)
    // do smth.
    var getValue = args.first.getHandlePosition()
}

// Question 18.
// ? Что такое замыкание?
// :: это функция вместе со всеми внешними переменными, которые ей доступны
// Лексическое окружение
let aZ = 'global';
  function outer() {
    let bZ = 'outer';
    function inner() {
      let cZ = 'inner'
      console.log(cZ);   // 'inner'
      console.log(bZ);   // 'outer'
      console.log(aZ);   // 'global'
    }
    console.log(aZ);     // 'global'
    console.log(bZ);     // 'outer'
    inner();
  }
outer();
console.log(aZ);         // 'global'

// Question 19.
// ? Что записывается в свойство [[Scope]] функции?
// :: ES6 ?

// Question 20.
// ? Какие очереди задач есть в event loop?
// :: microtasks, tasks, render

// Question 21.
// ? Какими из перечесленных способов можно добавить
// обработчик события на элемент
// :: element.onclick(<обработчик>), element.addEventListener('click', <обработчик>)

// Question 22.
/*
  1. ()
  2. !инверсия
  3. &&
  4. ||
*/
console.log(2 || 3)
console.log(0 || 1 && 2 || 3) // 2

// Question 23.
// ? Каким образом будут расположены элементы на странице, 
// если ширина элемента с классом flex более 1000 пикселей?
// :: Будут расположены в строку с равным рассоянием между элементами

// Question 24.
// var u = {}
// (function y(u) {
//     u.u = 10
//     u = null
// })(u)
// console.log(u) // it's an error

// Question 25.
// ? Что такое рекурсия?
// :: Вызов функцией самой себя

// Question 26.
async function bar() {
    return Promise.resolve(10);
}

async function foo() {}

const res1 = foo()
const res2 = bar()

console.log(res1, res2) // promise, promise

// Question 27.
// ? Что означает значение relative у свойства position?
// :: добавление свойств left, top, right и bottom изменяет позицию 
// элемента и сдвигает его в ту или иную сторону от первоначального расположения
// не выпадает из потока

// Question 28.
const magicStr = 'h2h40h'

const magicResult = magicStr
    .split('h') // [8, 12, 16]
    .map(s => s + 10) // ? ['10', '210', '4010', '10']
    .filter(s => s.length < 4)

console.log(magicResult) // ['10', '210', '10']

// Question 29
console.log('abc' === new String('abc')) // false
console.log('abc' == new String('abc'))

// Question 30
/*
    ? Какое будет положение у блока с id="child" 
    внутри блока id="parent"?

    @HTML
    <div id="parent">
        <div id="child">df</div>
    </div>

    @CSS
    #parent {
        width: 200px;
        height: 200px;
        border: 1px dotted lightgreen;
    }

    #child {
        width: 50px;
        height: 50px;
        margin: auto;
    }
*/
// :: блок child будет горизонтально по центру, а вертикально в верху