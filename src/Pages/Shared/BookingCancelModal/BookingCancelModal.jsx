import React, { useState } from "react";
import toast from "react-hot-toast";
import AuthenticationSpinner from "../Spinners/AuthenticationSpinner";

const BookingCancelModal = ({
  toggle,
  setToggle,
  deleteOrder,
  setDeleteOrder,
}) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = (id) => {
    setLoading(true);
    fetch(`https://oldruby-server.vercel.app/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount) {
          setToggle(!toggle);
          toast.success("Product booking cancelled", { duration: 2000 });
          setDeleteOrder(null);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="ruby-cancelOrderModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-cancelOrderModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-semibold">
            Are you sure you want to cancel?
          </h3>
          <div className="py-10 flex justify-evenly">
            <button
              onClick={() => handleDelete(deleteOrder)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              {loading ? <AuthenticationSpinner /> : "Yes"}
            </button>
            <button
              onClick={() => setDeleteOrder(null)}
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

export default BookingCancelModal;
