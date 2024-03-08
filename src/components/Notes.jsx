import React, { useState } from "react";
import { SaveIcon, TrashIcon } from "@heroicons/react/outline";
import NoteModal from "./NoteModal";

const Notes = () => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [colorSelections, setColorSelections] = useState([]);

  const handleSave = () => {
    if (note.trim() !== "") {
      const newNote = {
        title: title || `Note ${savedNotes.length + 1}`,
        content: note,
        colorIndex: 0, // Default color index
      };
      setSavedNotes([...savedNotes, newNote]);
      setColorSelections([...colorSelections, 0]);
      setNote("");
      setTitle("");
      setShowAdditionalDiv(false);
    }
  };

  const pastelColors = ["pastel1", "pastel2", "pastel3", "pastel4", "pastel5"];

  const handleDelete = (index) => {
    const updatedNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(updatedNotes);

    const updatedColorSelections = colorSelections.filter((_, i) => i !== index);
    setColorSelections(updatedColorSelections);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleModalSave = (editedNote) => {
    const updatedNotes = savedNotes.map((n) => (n === selectedNote ? editedNote : n));
    setSavedNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleColorClick = (index, colorIndex) => {
    const updatedColorSelections = colorSelections.map((c, i) => (i === index ? colorIndex : c));
    setColorSelections(updatedColorSelections);
  };

  return (
    <div className="container mx-auto mt-8 w-6/6">
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
              className="border border-lightgrey bg-lightblack p-2 mb-2 w-full rounded-lg h-24"
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

      <div className="flex space-x-4 flex-wrap ">
        {savedNotes.map((savedNote, index) => (
          <div key={index} className={`note-container bg-${pastelColors[colorSelections[index]]} border border-lightgrey p-4 rounded-lg mb-4 text-white w-60`}>
            <h2
              className="text-white font-bold mb-2 cursor-pointer"
              onClick={() => handleNoteClick(savedNote)}
            >
              {savedNote.title}
            </h2>
            <div className={`note-content p-2 mb-2 w-full rounded-lg h-[30px] overflow-hidden`}>
              {savedNote.content}
            </div>

            <div>
              {pastelColors.map((color, colorIndex) => (
                <button
                  key={colorIndex}
                  className={`inline-block h-3 w-3 rounded-full border border-lightgrey bg-${color}`}
                  onClick={() => handleColorClick(index, colorIndex)}
                  style={{
                    backgroundColor: colorIndex === colorSelections[index] ? `var(--${color})` : "transparent",
                  }}
                >
                  {colorIndex === colorSelections[index] && (
                    <div className={`h-2 w-2 rounded-full bg-${color} mx-auto`} />
                  )}
                </button>
              ))}
            </div>

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
