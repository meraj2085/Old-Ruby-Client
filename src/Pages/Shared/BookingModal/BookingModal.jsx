import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyer_name = form.buyer_name.value;
    const buyer_email = form.buyer_email.value;
    const item_name = form.item_name.value;
    const item_price = form.item_price.value;
    const buyer_number = form.buyer_number.value;
    const meeting_location = form.meeting_location.value;
    const product_id = product?._id;
    const status = 'available';
    const img = product?.img;
    const payment = false;
    const booking = {buyer_name, buyer_email,buyer_number, item_name,item_price, meeting_location, img , payment, product_id, status}

    fetch("http://localhost:5000/booking", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          setProduct(null);
          toast.success("Item is booked", { duration: 3000 });
        } else {
          toast.error(data.message, { duration: 3000 });
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="ruby-booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-booking-modal"
            onClick={() => setProduct(null)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="py-4">
            <form onSubmit={handleBooking} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="buyer_name"
                  required
                  defaultValue={user?.displayName}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="buyer_email"
                  defaultValue={user?.email}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item name</span>
                </label>
                <input
                  type="text"
                  name="item_name"
                  defaultValue={product?.name}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item price</span>
                </label>
                <input
                  type="text"
                  name="item_price"
                  defaultValue={product?.resell_price}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                <input
                  type="text"
                  name="buyer_number"
                  required
                  placeholder="Your phone number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meeting location</span>
                </label>
                <input
                  type="text"
                  name="meeting_location"
                  required
                  placeholder="Meeting location"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-red-700 hover:bg-red-600 border-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
