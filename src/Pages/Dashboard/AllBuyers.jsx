import React, { useEffect, useState } from "react";
import UserDeleteModal from "../Shared/UserDeleteModal/UserDeleteModal";

const AllBuyers = () => {
  const [buyers, setBuyers] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users?role=Buyer")
      .then((res) => res.json())
      .then((data) => {
        setBuyers(data);
      });
  }, [toggle]);

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
                    <label
                      onClick={() => setUserId(seller?.email)}
                      htmlFor="ruby-userDeleteModal"
                      className="btn btn-xs"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {userId && (
        <UserDeleteModal
          setUserId={setUserId}
          userId={userId}
          toggle={toggle}
          setToggle={setToggle}
        ></UserDeleteModal>
      )}
    </div>
  );
};

export default AllBuyers;
