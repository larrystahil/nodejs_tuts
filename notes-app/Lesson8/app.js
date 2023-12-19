const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customise yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Title: ' + argv.title, '\nBody: ' + argv.body);
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function (){
        console.log('Removing the note')
    }
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function (){
        console.log('Reading the note!');
    }
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List the notes available',
    handler: function(){
        console.log('Listing the notes!');
    }
});

yargs.parse()

// console.log(yargs.argv);

// Challeng: Add an option to yargs

// 1. Setup a body option for add command
// 2. Configure a description, make ut required, and for it to e a string
// 3. Log the  body value in the handler function
// 4. Test your work!