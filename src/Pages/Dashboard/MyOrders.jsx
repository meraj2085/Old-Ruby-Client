import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import BookingCancelModal from "../Shared/BookingCancelModal/BookingCancelModal";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [deleteOrder, setDeleteOrder] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/booked?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email, toggle]);

  console.log(orders);
  return (
    <div>
      <h1 className="text-3xl font-semibold my-4 mx-5">My products</h1>
      <div className="mx-5 shadow-md rounded-lg">
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
                <tr>
                  <th>{i + 1}</th>
                  <td>Cy Ganderton</td>
                  <td>{order?.item_name}</td>
                  <td>{order?.item_price}</td>
                  <td>
                    <label
                      onClick={() => setDeleteOrder(order?._id)}
                      htmlFor="ruby-cancelOrderModal"
                      className="px-6 py-1 font-semibold border rounded hover:border-red-500 text-red-500"
                    >
                      Cancel
                    </label>
                  </td>
                  <td>
                    <button className="px-6 py-1 font-semibold border rounded hover:border-green-500 text-green-500">
                      Pay
                    </button>
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
