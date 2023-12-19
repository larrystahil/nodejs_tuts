const validator = require('validator')
const getNotes = require('./notes.js')

const display = getNotes()

console.log(display)

console.log(validator.isURL('quaocletrade.com'))