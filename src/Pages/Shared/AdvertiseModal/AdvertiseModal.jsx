import React from "react";
import toast from "react-hot-toast";

const AdvertiseModal = ({
  setAdvertiseProduct,
  advertiseProduct,
  setToggle,
  toggle,
}) => {
  const handleAdvertise = (id) => {
    fetch(`https://oldruby-server.vercel.app/product/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("OldRuby-Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          toast.success("Advertise successful", { duration: 3000 });
          setToggle(!toggle);
          setAdvertiseProduct(null);
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="ruby-advertiseModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-advertiseModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-semibold">
            Advertise this product?
          </h3>
          <div className="flex items-center mt-3 space-x-5">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="py-10 flex justify-evenly">
            <button
              onClick={() => handleAdvertise(advertiseProduct)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Yes
            </button>
            <button
              onClick={() => setAdvertiseProduct(null)}
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

export default AdvertiseModal;
