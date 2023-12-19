const chalk = require('chalk');
const getNotes = require('./notes.js');

const display = getNotes();
console.log(display);

// Challenge: Use the chalk library in your project
// 
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string 'Success' to the console in green
// 4. Test your work

// Bonus: Use the docs to mess around with other styles. Make text bold and inversed.

const green =  chalk.green;
const bold = chalk.bold.red;
const inversedbold = chalk.bold.inverse.white;

console.log(green('Success')); //Succes in green
console.log(bold('Great'));// in Bolded text in red
console.log(inversedbold('This text is bolded and inversed'));

