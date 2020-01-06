const fs = require('fs');



var fetchNotes = function() {
    try{
        var notesString = fs.readFileSync('notes_data.json');
        return JSON.parse(notesString);
    }
    catch (e) {
        return [];
    }
}

var saveNotes = function(notes) {
    fs.writeFileSync('notes_data.json', JSON.stringify(notes));
}

var addNote = function(title, body) {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = function () {
    return fetchNotes();
}

var read = function (title) {
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter(function(note) {
        return note.title == title;
    });
    
    return filteredNotes[0];
}

var remove = function (title) {
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter(function(note){
        return note.title !== title;
    });
    
    saveNotes(filteredNotes);
    
    return (notes.length !== filteredNotes.length);
}

var showNoteInfo = function(note) {
    console.log("--");
    console.log("Title: " + note.title);
    console.log("Body: " + note.body);
}

module.exports = {
    addNote,
    getAll,
    read,
    remove, 
    showNoteInfo
};