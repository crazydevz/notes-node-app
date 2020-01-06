const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions =  {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Note Body',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add', 'Add a New Note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all Notes')
.command('read', 'Read a Note', {
    title: titleOptions
})
.command('remove', 'Remove a Note', {
    title: titleOptions
})
.help()
.argv;

var command = argv._[0];

//console.log('Command: ' + command);
//console.log('Yargs: ' , yargs.argv);

if (command === 'add') {
    var note  = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note added");
        notes.showNoteInfo(note);
    } else {
        console.log("Note with title " + argv.title +  " already exists!");
    }
} else if (command === 'list') {
    var notesList = notes.getAll();
    console.log("Printing " + notesList.length + "notes");
    for(var i=0; i < notesList.length; i++) {
        notes.showNoteInfo(notesList[i]);
    }
} else if (command === 'read') {
    var note = notes.read(argv.title);
    if(note) {
        console.log("Note found");
        notes.showNoteInfo(note);
    } else {
        console.log("Note not found");
    }
} else if (command === 'remove') {
    var noteRemoved = notes.remove(argv.title);
    if(noteRemoved) {
        console.log('Removed note with title: ' + argv.title);
    } else {
        console.log("Note with title " + argv.title + " doesn't exist");
    }
} else {
    console.log('command not recognized!');
}