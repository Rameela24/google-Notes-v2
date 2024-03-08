import React, { useState, useEffect } from "react";
import { SaveIcon } from "@heroicons/react/outline";

const NoteModal = ({ note, onSave, onClose }) => {
  const [editedNote, setEditedNote] = useState({ ...note });

  useEffect(() => {
    setEditedNote({ ...note });
  }, [note]);

  const handleSave = () => {
    onSave(editedNote);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-4 rounded-lg w-[50%]">
        <h2 className="text-black font-bold mb-2">Edit Note</h2>
        <label className="text-black font-bold mb-2">Title:</label>
        <input
          type="text"
          value={editedNote.title}
          onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
          placeholder="Type your title here..."
          className="border border-lightgrey bg-white p-2 mb-2 w-full rounded-lg"
        />
        <label className="text-black font-bold mb-2">Type your notes here:</label>
        <textarea
          value={editedNote.content}
          onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
          placeholder="Type your notes here..."
          className="border border-lightgrey bg-white p-2 mb-2 w-full rounded-lg h-40"
        />
        <div className="flex">
          <button onClick={handleSave} className="text-black p-2 mr-2">
            <SaveIcon className="h-6 w-6" />
          </button>
          <button onClick={onClose} className="text-black p-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
