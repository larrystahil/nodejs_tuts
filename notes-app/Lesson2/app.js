// const add = require('./utils.js')

// // const name = 'Larry'

// const sum = add(2,5)

// console.log(sum)

// Challenge Two: Define and use a function in a new file
// 
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function 
// 4. From app.js, load in and call the function printing message to console

const getNotes = require('./notes.js')

const display = getNotes()

console.log(display)