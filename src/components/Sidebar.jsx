import React from "react";

const Sidebar = (props) => {
  const noteElement = props.notes.map((notes, index) => (
    <div key={index}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
        <button style={{ marginRight: "10px" }} onClick={props.delete(index)}>
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
