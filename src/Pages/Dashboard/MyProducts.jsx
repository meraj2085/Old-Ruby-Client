import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import EditStatusModal from "../Shared/EditStatusModal/EditStatusModal";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true)
  const [products, setProducts] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user, toggle]);

  return (
    <div>
      <h1 className="text-3xl font-semibold my-4 mx-5">My products</h1>
      <div className="mx-5 shadow-md rounded-lg">
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
                    <button className="btn btn-xs">Delete</button>
                  </td>
                  {(product?.status === "available") & !product?.advertised ? (
                    <td>
                      <button className="btn btn-xs bg-blue-400 border-none">
                        advertise
                      </button>
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
    </div>
  );
};

export default MyProducts;
