# NotesApp
**A simple CLI notes taking app built on Node works on local file system**

![screenshot](https://i.imgur.com/OGW00j3.png)

## ***Features***

- *Add* a note
- *Remove* a note
- *List* all saved notes
- *Read* a note

## ***Requirements***

[**Node**](https://nodejs.org/en/) should be installed on your machine to run the app

## ***Usage***

First of all run ***npm install*** while in the app directory to install dependencies.

***Add a note***

    node app.js add --title="dummy title" --body="dummy body"
  
***Remove a note***

    node app.js remove --title="dummy title"
  
***Listing all notes***

    node app.js list
  
***Read a note***

    node app.js read --title="dummy title"
