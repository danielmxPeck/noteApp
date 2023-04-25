import "./App.css";
import React, { useState, useEffect } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

function App() {
  //states
  const localNotes = JSON.parse(localStorage.getItem("savedNotes"));
  const [notes, setNotes] = useState(localNotes || []);
  const [currentNoteId, setCurrentNoteId] = useState("");

  //useEffect
  useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(notes));
  }, [notes]);
  //functions
  const createNewNotes = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdowm note's title here",
    };
    setNotes((prevNote) => [...prevNote, newNote]);
    setCurrentNoteId(newNote.id);
  };

  const updateNote = (text) => {
    setNotes((oldNotes) => {
      const noteOrder = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const note = oldNotes[i];
        note.id === currentNoteId
          ? noteOrder.unshift({ ...note, body: text })
          : noteOrder.push(note);
      }
      return noteOrder;
    });
  };

  const deleteCurrentNote = (index) => {
    const newList = [...notes];
    newList.splice(index, 1);
    setNotes(newList);
  };

  const findCurrentNote = () => {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  };

  return (
    <main>
      {notes.length > 0 ? (
        <Split size={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNotes}
            deleteNote={deleteCurrentNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <button className="first-note" onClick={createNewNotes}>
            Create One Now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
