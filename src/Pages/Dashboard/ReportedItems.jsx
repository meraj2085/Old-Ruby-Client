import React, { useEffect, useState } from "react";
import DeleteModal from "../Shared/DeleteModal/DeleteModal";

const ReportedItems = () => {
  const [products, setProducts] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/reported")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [toggle]);

  return (
    <div>
      <div className="flex justify-between my-4 md:mx-5 mx-8">
        <h1 className="text-3xl font-semibold">Reported items</h1>
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
                <th>Name</th>
                <th>Seller name</th>
                <th>Seller email</th>
                <th>Post Date</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>{product?.name}</td>
                  <td>{product?.seller_name}</td>
                  <td>{product?.seller_email}</td>
                  <td>{product?.postDate}</td>
                  <td>${product?.resell_price}</td>
                  <td>
                    <label
                      onClick={() => setDeleteProduct(product?._id)}
                      htmlFor="ruby-deleteModal"
                      className="px-6 py-1 font-semibold border rounded hover:border-red-500 text-red-500"
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
      {deleteProduct && (
        <DeleteModal
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
          toggle={toggle}
          setToggle={setToggle}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ReportedItems;
