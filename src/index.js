//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
    // <h1>Hello World!</h1>,
    <App />,

    document.getElementById("root")
);

// implement the add note functionality
// 1. Create a constant that keeps track of the title and content.
// 2. pass the new note back to the App.jsx
// 3. add the new note to an array of notes
// 4. take the array of notes and render seperate Note components for each item in the array

// implement the delete note functionality
// callback from the Note component to trigger a delete function in the App.jsx
// use the filter function to filter out the item that needs to be deleted
// pass the id of the note back to the App.jsx

