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
      <h1 className="text-3xl font-semibold my-4 mx-5">All buyers</h1>
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
                <tr>
                  <th>{i + 1}</th>
                  <td>{seller?.email}</td>
                  <td>
                    <button className="btn btn-xs">Delete</button>
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
