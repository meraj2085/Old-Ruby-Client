import React, { useEffect, useState } from "react";

const AllBuyers = () => {
  const [buyers, setBuyers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users?role=Buyer")
      .then((res) => res.json())
      .then((data) => {
        setBuyers(data);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between my-4 md:mx-5 mx-8">
        <h1 className="text-3xl font-semibold">All buyers</h1>
        <label htmlFor="ruby-drawer" className="drawer-button lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </label>
      </div>
      <div className="mx-5 shadow-md rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((seller, i) => (
                <tr key={seller?._id}>
                  <th>{i + 1}</th>
                  <td>{seller?.email}</td>
                  <td>
                    <button
                      htmlFor="ruby-userDeleteModal"
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyers;
