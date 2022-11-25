import React from "react";
import toast from "react-hot-toast";

const ReportModal = ({ reportedItem, setReportedItem }) => {
  const handleReport = (id) => {
    fetch(`http://localhost:5000/product/report/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Reported done", { duration: 2000 });
          setReportedItem(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="ruby-reportModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-reportModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-semibold">
            Report this item?
          </h3>
          <div className="py-10 flex justify-evenly">
            <button
              onClick={() => handleReport(reportedItem)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Report
            </button>
            <button
              onClick={() => setReportedItem(null)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
