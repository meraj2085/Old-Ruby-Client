import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { format } from "date-fns";
import { getImageLink } from "../../Api/getImageLink";
import { addProduct } from "../../Api/addProduct";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.img.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const category = form.category.value;
    const location = form.location.value;
    const resell_price = form.resell_price.value;
    const original_price = form.original_price.value;
    const years_of_use = form.years_of_use.value;
    const year_of_purchase = form.year_of_purchase.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const condition = form.condition.value;
    const mobile_number = form.mobile_number.value;
    const description = form.description.value;
    const postDate = format(new Date(), "PP");
    const seller_verification = false;
    const advertised = false;
    const status = "available";
    const reported = false;

    getImageLink(formData).then((imgData) => {
      const img = imgData.data.display_url;
      const product = {
        name,
        img,
        category,
        location,
        postDate,
        original_price,
        resell_price,
        years_of_use,
        year_of_purchase,
        seller_email,
        seller_name,
        seller_verification,
        condition,
        status,
        mobile_number,
        description,
        advertised,
        reported
      };
      addProduct(product)
      .then(data =>{
          if(data?.insertedId){
               toast.success('Product added successfully.', {duration: 3000})
               navigate('/dashboard/myProducts')
          }
      })
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold my-4 mx-5">Add a product</h1>
      <div className="flex justify-center">
        <form onSubmit={handleAddProduct} className="card-body max-w-xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              name="name"
              required
              className="input input-bordered"
            />
          </div>
          <div className="md:flex gap-5 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product image</span>
              </label>
              <input
                type="file"
                name="img"
                accept="image/*"
                className="file-input file-input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <select
                name="category"
                defaultValue="Buyer"
                className="select select-bordered"
              >
                <option>iphone</option>
                <option>samsung</option>
                <option>xiaomi</option>
                <option>oppo</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Your location"
              name="location"
              required
              className="input input-bordered"
            />
          </div>
          <div className="md:flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Original price</span>
              </label>
              <input
                type="text"
                placeholder="Original price"
                name="original_price"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Resell price</span>
              </label>
              <input
                type="text"
                placeholder="Resell price"
                name="resell_price"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Year of purchase</span>
              </label>
              <input
                type="text"
                placeholder="Year of purchase"
                name="year_of_purchase"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Years of use</span>
              </label>
              <input
                type="text"
                placeholder="Years of use"
                name="years_of_use"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seller name</span>
              </label>
              <input
                type="text"
                placeholder="Seller name"
                name="seller_name"
                required
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seller email</span>
              </label>
              <input
                type="text"
                placeholder="Seller email"
                name="seller_email"
                required
                defaultValue={user?.email}
                disabled
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Mobile number</span>
              </label>
              <input
                type="text"
                placeholder="Mobile number"
                name="mobile_number"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product condition</span>
              </label>
              <select
                name="condition"
                defaultValue="good"
                className="select select-bordered"
              >
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              required
              placeholder="Mobile description"
              name="description"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-red-700 hover:bg-red-600 border-none"
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
