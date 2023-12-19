const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

// const display = getNotes();
// const green = chalk.green;
// const inversebold = chalk.inverse.bold.white;

// console.log(display);
// console.log(green('Success!'));
// console.log(inversebold('I am testing out with node.js'));

const command = process.argv[2];

console.log(process.argv)

if (command === 'add'){
    console.log('Adding note!')
}
else if (command === 'remove'){
    console.log('Removing note!')
}