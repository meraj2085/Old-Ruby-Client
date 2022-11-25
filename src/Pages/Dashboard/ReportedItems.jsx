import React, { useEffect, useState } from "react";

const ReportedItems = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/product/reported")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <h1 className="text-3xl font-semibold my-4 mx-5">Reported items</h1>
      <div className="mx-5 shadow-md rounded-lg">
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
              {products?.map((product, i) => <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product?.name}</td>
                <td>{product?.seller_name}</td>
                <td>{product?.seller_email}</td>
                <td>{product?.postDate}</td>
                <td>${product?.resell_price}</td>
                <td><button className="px-6 py-1 font-semibold border rounded hover:border-red-500 text-red-500">Delete</button></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportedItems;
