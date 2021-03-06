import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function addNote(note) {
    setNotesArray((prevItems) => [...prevItems, note]);
  }
  function deleteNote(id) {
    setNotesArray((prevItems) => {
      return prevItems.filter((obj, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onButtonClick={addNote} />
      {console.log(notesArray)}
      {notesArray.map((element, key) => (
        <Note
          id={key}
          key={key}
          title={element.title}
          content={element.content}
          onDeleteClick={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
