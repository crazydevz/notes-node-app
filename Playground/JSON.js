//var obj = {
//    name: 'Talha Iqbal'
//};

//var objString = JSON.stringify(obj);

//var personString = '{"name":"Talha", "age":20}';
//var person = JSON.parse(personString);

//console.log(typeof (person));
//console.log(person);

//console.log(typeof(objString));
//console.log(objString);

const fs = require('fs');

// JSON format
var originalNote = {
    title: 'Any Title',
    description: 'Description...'
};

// Converting to string
var originalNoteStr = JSON.stringify(originalNote);

// Saving to file
fs.writeFileSync('notes.json', originalNoteStr);

// Reading from file (string is returned)
var noteString = fs.readFileSync('notes.json');

// Parsing string to JSON format
var note = JSON.parse(noteString);

console.log(typeof (note));
console.log(note.description);