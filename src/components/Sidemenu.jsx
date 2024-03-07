import React from "react";
import {
  IoToday,
  IoTrash,
  IoArchive,
  IoPin,
  IoNotifications,
} from "react-icons/io5";
import { FaRegStickyNote } from "react-icons/fa";
import Notes from "./Notes";

const Sidemenu = () => {
  return (
    <>
      <div className="flex  h-full bg-lightblack p-4 ">
        <div className=" bg-lightblack text-white space-y-8 w-[20%] cursor-pointer min-h-lvh	min-height: 100lvh;">
          <div className="flex space-x-4  hover:bg-gray py-4 rounded">
            <FaRegStickyNote size={24} />
            <h1>Notes</h1>
          </div>

          <div className="flex space-x-4  hover:bg-gray py-4 rounded">
            <IoNotifications size={24} />
            <h1>Reminders</h1>
          </div>

          <div className="flex space-x-4  hover:bg-gray py-4 rounded">
            <IoArchive size={24} />
            <h1>Archived</h1>
          </div>

          <div className="flex space-x-4  hover:bg-gray py-4 rounded">
            <IoTrash size={24} />
            <h1>Bin</h1>
          </div>
        </div>
        <Notes />
      </div>
    </>
  );
};

export default Sidemenu;
