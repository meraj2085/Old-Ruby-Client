import React from "react";
import toast from "react-hot-toast";

const DeleteModal = ({
  setDeleteProduct,
  deleteProduct,
  setToggle,
  toggle,
}) => {
  const handleDelete = (id) => {
    fetch(`https://oldruby-server.vercel.app/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete successful", { duration: 2000 });
        console.log(data);
        setDeleteProduct(null);
        setToggle(!toggle);
      });
  };

  return (
    <div>
      <input type="checkbox" id="ruby-deleteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-deleteModal"
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
              onClick={() => handleDelete(deleteProduct)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Yes
            </button>
            <button
              onClick={() => setDeleteProduct(null)}
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

export default DeleteModal;
