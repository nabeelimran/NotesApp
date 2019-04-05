const fs = require('fs');
const chalk = require('chalk');

const chalkGreenBG = msg => console.log(chalk.green.inverse(msg));
const chalkRedBG = msg => console.log(chalk.red.inverse(msg));

const addNote = (title, body) => {
    const notes = loadNotes()
    const dupNote = notes.find( note =>  note.title === title )

    debugger
    if(!dupNote){
        notes.push({title,body});
        saveNotes(notes);
        chalkGreenBG('Note added successfully!')
    } else{
        chalkRedBG("Title already taken, try another!")
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const filteredNotes = notes.filter( note => note.title !== title )
    if(notes.length === filteredNotes.length) {
        chalkRedBG('No note found with this title')
    } else{
        saveNotes(filteredNotes)
        chalkGreenBG('removed successfully');
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length > 0){
        console.log(chalk.blue.inverse('Your notes:'))
        notes.map( ({title}) => console.log(title))
    } else {
        chalkRedBG('No note present')
    }
}

const readNote = title => {
    const notes = loadNotes()
    noteToRead = notes.find( note => note.title === title)
    if(noteToRead){
        console.log(chalk.bold.underline(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        chalkRedBG('Note not found!')
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const notesJSON = dataBuffer.toString();
        return JSON.parse(notesJSON);
    } catch (e) {
        return [];
    }
}
const saveNotes = notes => {
    data = JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);
}


module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}