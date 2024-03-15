// DeletedNotes.jsx
import React from "react";

const DeletedNotes = ({ deletedNotes }) => {
  return (
    <div className="container mx-auto mt-8 w-6/6">
      <h2 className="text-white text-2xl mb-4">Deleted Notes</h2>
      <div className="flex space-x-4 flex-wrap">
        {deletedNotes.map((deletedNote, index) => (
          <div
            key={index}
            className="note-container border border-red-500 p-4 rounded-lg mb-4 text-white w-60"
          >
            <h2 className="text-red-500 font-bold mb-2">{deletedNote.title}</h2>
            <div className="note-content p-2 mb-2 w-full rounded-lg h-[30px] overflow-hidden">
              {deletedNote.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeletedNotes;
