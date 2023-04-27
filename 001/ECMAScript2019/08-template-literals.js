// Template Literals
// Result -> common string
const user = 'Vladislav'
const countOfLettersInBox = 27
//const message = 'Hello, ' + user + ' you have ' + countOfLettersInBox + ' letters in your inbox'
const message = `Hello, ${user} you have ${countOfLettersInBox} letters in your inbox. Now is ${Date.now()} + ${ 2 + 2 }`
console.log(message)

const items = ['tea', 'coffee']
const html = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
    </ul>
`
console.log(html)