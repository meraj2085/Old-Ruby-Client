import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ product }) => {
  const { user } = useContext(AuthContext);
//   const {
//     name,
//     img,
//     seller_name,
//     resell_price,
//     seller_verification,
//     description,
//     location,
//   } = product;

  return (
    <div>
      <input type="checkbox" id="ruby-booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="ruby-booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
