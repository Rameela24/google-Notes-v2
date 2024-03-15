import React from 'react';
import { archive } from './archive';


const ArchivedNotes = () => {
    const archivedNotes=archive
    console.log(archivedNotes,'lfdaksj')
  return (
    <div className="container mx-auto mt-8 w-6/6">
      <h2 className="text-white text-2xl mb-4">Archived Notes</h2>
      <div className="flex space-x-4 flex-wrap">
        {archivedNotes.map((archivedNote, index) => (
          <div
            key={index}
            className="note-container border border-lightgrey p-4 rounded-lg mb-4 text-white w-60"
          >
            <h2 className="text-yellow-500 font-bold mb-2">{archivedNote.title}</h2>
            <div className="note-content p-2 mb-2 w-full rounded-lg h-[30px] overflow-hidden">
              {archivedNote.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivedNotes;
