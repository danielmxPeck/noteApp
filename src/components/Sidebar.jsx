import React from "react";
import "../App.css"

const Sidebar = (props) => {
  const noteElement = props.notes.map((notes, index) => (
    <div key={notes.id}>
      <div
        className={`title ${
          notes.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(notes.id)}
      >
        <h4 className="text-snippet">{notes.body.split("\n")[0]}</h4>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => {
            props.deleteNote(index);
          }}
        >
          -
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElement}
    </section>
  );
};

export default Sidebar;
