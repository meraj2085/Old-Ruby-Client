import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [sellers, setSellers] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/users?role=Seller")
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold my-4 mx-5">All sellers</h1>
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
              {sellers?.map((seller, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{seller?.email}</td>
                  <td><button className="btn btn-xs">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
