import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [sellers, setSellers] = useState(null);
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/users?role=Seller")
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
      <h1 className="text-3xl font-semibold my-4 mx-5">All sellers</h1>
      <div className="mx-5 shadow-md rounded-lg">
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
