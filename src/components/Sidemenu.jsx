import React, { useState } from "react";
import { IoTrash, IoArchive, IoNotifications } from "react-icons/io5";
import { FaBars, FaRegStickyNote } from "react-icons/fa";
import Notes from "./Notes";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidemenu = () => {
  const [isTextHidden, setIsTextHidden] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextHidden(!isTextHidden);
  };

  return (
    <>
      <div className="flex h-full bg-lightblack  ">
        <div className=" bg-lightblack text-white space-y-8 w-[20%] cursor-pointer min-h-lvh min-height: 100lvh;">
          <FaBars
            className=" absolute  top-5 text-gray h-10 w-10 p-2 text-white cursor-pointer "
            onClick={toggleTextVisibility}
          />
          <div className={`flex space-x-2 hover:bg-yellow py-4 rounded p-2 `}>
            <FaRegStickyNote size={24} />
            <div className="pl-4">
              <h1 className={`${isTextHidden ? "hidden" : ""}`}>Notes</h1>
            </div>
          </div>

          <div className={`flex space-x-2 hover:bg-yellow py-4 rounded-full p-2 `}>
            <IoNotifications size={24} />
            <div className="pl-4">
              <h1 className={`${isTextHidden ? "hidden" : ""}`}>Reminders</h1>
            </div>
          </div>

          {/* Link to the 'Archived' route */}
          <Link to="/archived" className={`flex space-x-2 hover:bg-yellow py-4 rounded p-2 `}>
            <IoArchive size={24} />
            <div className="pl-4">
              <h1 className={`${isTextHidden ? "hidden" : ""}`}>Archived</h1>
            </div>
          </Link>

          <div className={`flex space-x-2 hover:bg-yellow py-4 rounded p-2 `}>
            <IoTrash size={24} />
            <div className="pl-4">
              <h1 className={`${isTextHidden ? "hidden" : ""}`}>Bin</h1>
            </div>
          </div>

        </div>
        <Notes />
      </div>
    </>
  );
};

export default Sidemenu;
