import React from "react";

const AddProduct = () => {
  return (
    <div className="py-10 px-5">
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 capitalize">
          Add A Product
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700" for="product-name">
                Product name
              </label>
              <input
                name="name"
                id="product-name"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="text-gray-700" for="price">
                Price
              </label>
              <input
                name="price"
                id="price"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="text-gray-700" for="phone">
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="text-gray-700" for="location">
                Location
              </label>
              <input
                name="location"
                id="location"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            <div>
              <select
                required
                className="select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-0 focus:ring-0"
              >
                <option disabled selected>
                  Condition
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>

            <div>
              <select
                required
                className="select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-0 focus:ring-0"
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
              <label class="text-gray-700" for="use">
                Used
              </label>
              <input
                name="use"
                id="use"
                type="number"
                min="2000"
                max="2099"
                step="1"
                class="select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-0 focus:ring-0"
              />
            </div>

            <div>
              <label
                htmlFor="file"
                className="flex items-center mx-auto mt-6 text-center border bg-white rounded-md cursor-pointer"
              >
                <input
                  id="file"
                  type="file"
                  name="image"
                  accept="image/*"
                  className="file-input file-input-ghost w-full bg-white"
                />
              </label>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button
              type="submit"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-gray-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
