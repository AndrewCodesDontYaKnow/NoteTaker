const orm = require("../config/orm.js");
// where the logic of saving happens
const util = require('util');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Note {
    read() {
        return orm.showNote("notes", value)
    }

    write() {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then(notes => {
            let parseNotes;
            try {
                parseNotes = [].concat(JSON.parse(notes))
            } catch(err) {
                parseNotes = []
            }
        })
    }

    addNote(note) {
        const {title, text} = note;
        if(!title || !text) {
            throw new Error("Title and text required.")
        }
        const newNote = {title, text, id: uuidv4()}
        console.log(newNote)
        return this.getNotes()
        // insert newNote as note into notes
        .then(notes => [...notes, newNote])
        // write the note as update
        .then(update => this.write(update))
        // construct the newNote
        .then(() => newNote)

    }

    deleteNote(id) {
        return this.getNotes()
        // the ok: true turns this to be true, and then it deletes
        .then(notes => notes.filter(note => note.id !== id))
        .then(filteredNotes => this.write(filteredNotes))
    }
}

module.exports = new Note();
