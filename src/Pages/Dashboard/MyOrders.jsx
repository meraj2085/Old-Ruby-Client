import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import BookingCancelModal from "../Shared/BookingCancelModal/BookingCancelModal";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [deleteOrder, setDeleteOrder] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/booked?email=${user?.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("OldRuby-Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email, toggle]);

  return (
    <div>
      <div className="flex justify-between my-4 md:mx-5 mx-8">
        <h1 className="text-3xl font-semibold">My orders</h1>
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
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Cancel order</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, i) => (
                <tr key={order?._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={order?.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{order?.item_name}</td>
                  <td>{order?.item_price}</td>
                  <td>
                    {!order?.payment && (
                      <label
                        onClick={() => setDeleteOrder(order?._id)}
                        htmlFor="ruby-cancelOrderModal"
                        className="px-6 py-1 font-semibold border rounded hover:border-red-500 text-red-500"
                      >
                        Cancel
                      </label>
                    )}
                  </td>
                  <td>
                    {order?.payment && (
                      <button className="px-9 py-1 font-semibold border rounded hover:border-green-500 text-green-500">
                        Paid
                      </button>
                    )}
                    {order?.status === "available" ? (
                      <>
                        {!order?.payment && (
                          <Link to={`/dashboard/payment/${order?._id}`}>
                            <button className="px-10 py-1 font-semibold border rounded">
                              Pay
                            </button>
                          </Link>
                        )}
                      </>
                    ) : (
                      <>
                        {order?.payment === true ? (
                          ""
                        ) : (
                          <button className="px-5 py-1 font-semibold border rounded hover:border-blue-500 text-blue-500">
                            Sold out
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleteOrder && (
        <BookingCancelModal
          setToggle={setToggle}
          toggle={toggle}
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
        ></BookingCancelModal>
      )}
    </div>
  );
};

export default MyOrders;
