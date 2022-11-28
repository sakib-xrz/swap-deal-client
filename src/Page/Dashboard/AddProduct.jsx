import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const AddProduct = () => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState();
  const [condition, setCondition] = useState();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleBrand = (e) => {
    setBrand(e.target.value);
  };

  const handleCondition = (e) => {
    setCondition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (brand === undefined) {
      toast("Please Select A Brand");
      return;
    }

    const category = brand.toLowerCase();
    const name = form.productName.value;
    const location = form.location.value;
    const resale = form.resale.value;
    const original = form.original.value;
    const use = form.use.value;
    const time = new Date().toLocaleDateString();
    const seller = user?.displayName;
    const phone = form.phone.value;
    const currentCondition = condition;

    if (currentCondition === undefined) {
      toast("Please Select Your Product Condition");
      return;
    }

    const description = form.description.value;

    const imageFile = form.image.files[0];

    if (!imageFile) {
      toast("Please Select A Product Image");
      return;
    }

    const formData = new FormData();
    setLoading(true);
    formData.append("image", imageFile);

    const imgAPI = "6d366223bef33de9baf4dac3d35fbd81";
    const url = `https://api.imgbb.com/1/upload?key=${imgAPI}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const img = data.data.display_url;

        const newProduct = {
          brand: category,
          name,
          img,
          location,
          resale,
          original,
          use,
          time,
          seller,
          phone,
          currentCondition,
          description,
          email: user?.email,
          verified: seller?.verified,
        };

        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setLoading(false);
              toast.success("Product Added Successfully");
              form.reset();
              setTimeout(() => {
                navigate("/dashboard/my-product");
              }, 2000);
            }
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="py-10 px-5">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-2xl text-center font-semibold text-gray-700 capitalize">
          Add A Product
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="product-name">
                Select a brand
              </label>
              <select
                required
                className="select block w-full h-[2.70rem] min-h-[2.70rem] px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-0 focus:ring-0"
                onChange={handleBrand}
              >
                <option disabled selected>
                  Brand
                </option>
                <option>Acer</option>
                <option>Asus</option>
                <option>Dell</option>
                <option>Hp</option>
                <option>Lenovo</option>
                <option>Samsung</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700" htmlFor="product-name">
                Product name
              </label>
              <input
                required
                placeholder="Hp Pavelion 15"
                name="productName"
                id="product-name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label htmlFor="file" className="text-gray-700">
                Upload a image <small className="text-xs">(500px*500px)</small>
              </label>
              <input
                id="file"
                type="file"
                name="image"
                accept="image/*"
                className="file-input file-input-ghost w-full h-[2.70rem] min-h-[2.70rem] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-0 focus:ring-0"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="location">
                Location
              </label>
              <input
                required
                placeholder="Mirpur"
                name="location"
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="resale-price">
                Selling price
              </label>
              <input
                required
                placeholder="65000"
                name="resale"
                id="resale-price"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="original-price">
                Buying price
              </label>
              <input
                required
                placeholder="79600"
                name="original"
                id="original-price"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="use">
                Used time
              </label>
              <input
                required
                placeholder="1 Year/ 1.6 Years/ 6 Months "
                name="use"
                id="use"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="name">
                Seller name
              </label>
              <input
                required
                defaultValue={user?.displayName}
                readOnly
                name="sellerName"
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="phone">
                Phone
              </label>
              <input
                required
                placeholder="01942000001"
                name="phone"
                id="phone"
                type="tel"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="product-condition">
                Select condition
              </label>
              <select
                required
                className="select block w-full h-[2.70rem] min-h-[2.70rem] px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-0 focus:ring-0"
                onChange={handleCondition}
              >
                <option disabled selected>
                  Condition
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              placeholder="Product Description"
              name="description"
              id="description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-gray-600"
            >
              {loading ? <SmallSpinner></SmallSpinner> : "Add Product"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
