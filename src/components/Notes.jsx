import React, { useState, useEffect } from "react";
import { SaveIcon, TrashIcon } from "@heroicons/react/outline";
import NoteModal from "./NoteModal";

const Notes = () => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSave = () => {
    if (note.trim() !== "") {
      const newNote = {
        title: title || `Note ${savedNotes.length + 1}`,
        content: note,
      };
      setSavedNotes([...savedNotes, newNote]);
      setNote("");
      setTitle("");
      setShowAdditionalDiv(false);
    }
  };

  const handleDelete = (index) => {
    const updatedNotes = [...savedNotes];
    updatedNotes.splice(index, 1);
    setSavedNotes(updatedNotes);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleModalSave = (editedNote) => {
    const updatedNotes = savedNotes.map((n) => (n === selectedNote ? editedNote : n));
    setSavedNotes(updatedNotes);
    setSelectedNote(null);
    console.log('j;jkdfl')
  };

  return (
    <div className="container mx-auto mt-8 w-4/6">
      <div className="flex justify-center mb-4 relative text-white">
        {showAdditionalDiv ? (
          <div className="border border-lightgrey p-4 rounded-lg mb-4 text-white w-[50%] mx-auto">
            <h2 className="text-white font-bold mb-2">New Note</h2>
            <label className="text-white font-bold mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type your title here..."
              className="border border-lightgrey bg-lightblack p-2 mb-2 w-full rounded-lg"
            />
            <label className="text-white font-bold mb-2">Type your notes here:</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Type your notes here..."
              className="border border-lightgrey bg-lightblack p-2 mb-2 w-full rounded-lg"
            />
            <div className="flex">
              <button onClick={handleSave} className="text-white p-2 mr-2">
                <SaveIcon className="h-6 w-6" />
              </button>
              <button onClick={() => setShowAdditionalDiv(false)} className="text-white p-2">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <input
            type="text"
            placeholder="Type your note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border border-lightgrey bg-lightblack p-2 w-[50%] shadow-custom rounded-lg"
            onClick={() => setShowAdditionalDiv(true)}
          />
        )}
      </div>

      <div className="flex justify-between flex-wrap">
        {savedNotes.map((savedNote, index) => (
          <div key={index} className="border border-lightgrey p-4 rounded-lg mb-4 text-white w-[48%]">
            <h2
              className="text-white font-bold mb-2 cursor-pointer"
              onClick={() => handleNoteClick(savedNote)}
            >
              {savedNote.title}
            </h2>
            <textarea
              value={savedNote.content}
              readOnly
              className="border border-lightgrey bg-lightblack p-2 mb-2 w-full rounded-lg"
            />
            <div className="flex">
              <button onClick={() => handleDelete(index)} className="bg text-white p-2">
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedNote && (
        <NoteModal
          note={selectedNote}
          onSave={handleModalSave}
          onClose={() => setSelectedNote(null)}
        />
      )}
    </div>
  );
};

export default Notes;
