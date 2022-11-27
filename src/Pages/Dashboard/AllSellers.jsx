import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [sellers, setSellers] = useState(null);
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/users?role=Seller", {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('OldRuby-Token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
      });
  }, [toggle]);

  const handleVerify = (email) =>{
    fetch(`http://localhost:5000/verificationStatus?email=${email}`,{
      method: "PUT"
    })
      .then((res) => res.json())
      .then((data) => {
        setToggle(!toggle);
      });
  }

  return (
    <div>
      <div className="flex justify-between my-4 md:mx-5 mx-8">
        <h1 className="text-3xl font-semibold">All sellers</h1>
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
      <div className="mx-5 shadow-md rounded-lg mb-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Delete</th>
                <th>Verify</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller?.email}</td>
                  <td>
                    <button className="btn btn-xs bg-red-500 border-none">
                      Delete
                    </button>
                  </td>
                  <td>
                    {seller?.seller_verification ? (
                      <button className="border-none text-green-600">
                        Verified
                      </button>
                    ) : (
                      <button onClick={()=>handleVerify(seller?.email)} className="btn btn-xs bg-blue-400 border-none">
                        Verify
                      </button>
                    )}
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

export default AllSellers;
