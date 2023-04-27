// Spread operator for Objects
// equals Object.assign() but easier
// Example 1.
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
}

const options = {
    user: 'john',
    password: 'utopia'
}
const port = 8080

const result = {
    // turns object into list of properties
    ...defaults, 
    port, 
    ...options,
    connect() {

    }
}
console.log(result)