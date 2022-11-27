import React from "react";

const EditStatusModal = ({
  editProduct,
  setEditProduct,
  setToggle,
  toggle,
}) => {
  const handleSoldOut = (id) => {
    fetch(`https://oldruby-server.vercel.app/product/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          setToggle(!toggle);
          console.log(data);
          setEditProduct(null);
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="ruby-editStatusModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-editStatusModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-semibold">
            Is this product sold out?
          </h3>
          <div className="flex items-center mt-3 space-x-5">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="py-10 flex justify-evenly">
            <button
              onClick={() => handleSoldOut(editProduct)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Sold out
            </button>
            <button
              onClick={() => setEditProduct(null)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStatusModal;
