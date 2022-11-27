import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import AdvertiseModal from "../Shared/AdvertiseModal/AdvertiseModal";
import DeleteModal from "../Shared/DeleteModal/DeleteModal";
import EditStatusModal from "../Shared/EditStatusModal/EditStatusModal";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);
  const [products, setProducts] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [advertiseProduct, setAdvertiseProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products?email=${user?.email}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('OldRuby-Token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user, toggle]);

  return (
    <div>
      <div className="flex justify-between my-4 md:mx-5 mx-8">
        <h1 className="text-3xl font-semibold">My products</h1>
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
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                <th>Advertise</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>{product?.name}</td>
                  <td>{product?.resell_price}</td>
                  <td>
                    {product?.status === "available" && (
                      <label
                        onClick={() => setEditProduct(product?._id)}
                        type="button"
                        htmlFor="ruby-editStatusModal"
                        className={
                          "px-2 text-green-500 py-1 font-semibold border rounded hover:border-gray-8000"
                        }
                      >
                        Available
                      </label>
                    )}
                    {product?.status === "sold" && (
                      <button
                        type="button"
                        className={
                          "px-6 py-1 font-semibold border rounded hover:border-gray-800 text-red-500"
                        }
                      >
                        Sold
                      </button>
                    )}
                  </td>
                  <td>
                    <label
                      onClick={() => setDeleteProduct(product?._id)}
                      htmlFor="ruby-deleteModal"
                      className="btn btn-xs"
                    >
                      Delete
                    </label>
                  </td>
                  {(product?.status === "available") & !product?.advertised ? (
                    <td>
                      <label
                        onClick={() => setAdvertiseProduct(product?._id)}
                        htmlFor="ruby-advertiseModal"
                        className="btn btn-xs bg-blue-400 border-none"
                      >
                        advertise
                      </label>
                    </td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {editProduct && (
        <EditStatusModal
          editProduct={editProduct}
          setEditProduct={setEditProduct}
          setToggle={setToggle}
          toggle={toggle}
        ></EditStatusModal>
      )}
      {deleteProduct && (
        <DeleteModal
          setDeleteProduct={setDeleteProduct}
          deleteProduct={deleteProduct}
          setToggle={setToggle}
          toggle={toggle}
        ></DeleteModal>
      )}
      {advertiseProduct && (
        <AdvertiseModal
          advertiseProduct={advertiseProduct}
          setAdvertiseProduct={setAdvertiseProduct}
          setToggle={setToggle}
          toggle={toggle}
        ></AdvertiseModal>
      )}
    </div>
  );
};

export default MyProducts;
