import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const UserDeleteModal = ({ setUserId, userId, toggle, setToggle }) => {
  const { userDelete } = useContext(AuthContext);

  const handleDelete = (email) => {
    console.log(email);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="ruby-userDeleteModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-userDeleteModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-semibold">
            Are you sure you want to delete?
          </h3>
          <div className="flex items-center mt-3 space-x-5">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="py-10 flex justify-evenly">
            <button
              onClick={() => handleDelete(userId)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Yes
            </button>
            <button
              onClick={() => setUserId(null)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteModal;
