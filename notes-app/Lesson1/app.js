const fs = require('fs')

//fs.writeFileSync('notes.txt', 'My name is Andrew.')

fs.appendFileSync('notes.txt', ' I am 23 years old and I am handsome')


//Challenge one: Append a message to notes.txt
//Steps
//1. Use appendFileSync to append to the file
//2. Run the script
//3. Check your work by opening the file and viewing the appended text