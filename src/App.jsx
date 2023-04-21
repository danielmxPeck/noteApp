import "./App.css";
import React, { useState, useEffect } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = usestate([]);
  const [currentNoteId, setCurrentNoteId] = useState("");

  return (
    <main>
      {notes.length > 0 ? (
        <Split size={[30, 70]} direction="horizontal" className="split">
          <Sidebar />
          {currentNoteId && notes.length > 0 && <Editor />}
        </Split>
      ) : (
        <div>
          <button className="first-note">Create One Now</button>
        </div>
      )}
    </main>
  );
}

export default App;
