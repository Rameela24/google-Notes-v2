import React, { useState } from "react";
import { SaveIcon, TrashIcon } from "@heroicons/react/outline";
import { HiArchive } from "react-icons/hi"; // Import the archive icon
import NoteModal from "./NoteModal";
import DeletedNotes from "./DeletedNotes";
import { archive } from "./archive";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate=useNavigate()
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
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
    const deletedNote = savedNotes[index];
    const updatedNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(updatedNotes);
    setDeletedNotes([...deletedNotes, deletedNote]);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleModalSave = (editedNote) => {
    const updatedNotes = savedNotes.map((n) => (n === selectedNote ? editedNote : n));
    setSavedNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleArchive=(note)=>{
    console.log(note,'ldfal')
    archive.push(note)
    navigate('/archived')
  }

  return (
    <div className="container mx-auto mt-8 w-6/6">
      <div className="flex justify-center mb-4 relative text-white">
        {showAdditionalDiv ? (
          <div className="border border-lightgrey p-4 rounded-lg mb-4 text-white w-[50%] mx-auto ">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className=" bg-lightblack p-2 mb-2 w-full outline-none  rounded-lg "
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Take a note..."
              className=" bg-lightblack p-2 mb-2 w-full outline-none rounded-lg h-18"
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
            className="border border-lightgrey bg-lightblack p-2 w-[50%] rounded-lg"
            onClick={() => setShowAdditionalDiv(true)}
          />
        )}
      </div>

      <div className="flex space-x-4 flex-wrap">
        {savedNotes.map((savedNote, index) => (
          <div
            key={index}
            className="note-container border border-lightgrey p-4 rounded-lg mb-4 text-white w-60"
          >
            <div className="flex items-center justify-between mb-2">
              <h2
                className="text-white font-bold mb-2 cursor-pointer"
                onClick={() => handleNoteClick(savedNote)}
              >
                {savedNote.title}
              </h2>
              <button onClick={()=>{handleArchive(savedNote)}}> <HiArchive className="text-yellow-500 cursor-pointer" /> {/* Archive icon */}</button>
             
            </div>
            <div className={`note-content p-2 mb-2 w-full rounded-lg h-[30px] overflow-hidden`}>
              {savedNote.content}
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

      {/* Render DeletedNotes component */}
      <DeletedNotes deletedNotes={deletedNotes} />

    </div>
  );
};

export default Notes;
