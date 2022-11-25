import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import verify from "../../assets/category/verified.png";
import { AuthContext } from "../../contexts/AuthProvider";
import Modal from "./Modal";

const Brands = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const products = useLoaderData();
  const [booking, setBooking] = useState(null);
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;

    const bookingData = {
      name,
      email,
      phone,
      location,
      productName,
      productPrice,
      productImg: booking?.img,
      paymentStatus: "Unpaid",
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBooking(null);
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="container mx-auto px-5 py-14">
      <div className="grid grid-cols-12 md:gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="col-span-12 md:col-span-6 lg:col-span-4 mb-10 md:mb-0"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="px-4 py-2 border-b-2">
                <h1 className="text-2xl text-center font-bold uppercase">
                  {product.name}
                </h1>
              </div>
              <div className="relative">
                <img
                  className="px-5 w-auto h-auto bg-white mt-2"
                  src={product.img}
                  alt=""
                />
                <h2 className="bg-primary text-white px-2 pt-[3px] pb-[5px] rounded-full inline text-xs absolute top-0 left-5">
                  {product.brand}
                </h2>
              </div>

              <div className="border-t-2 px-4 pt-2 flex items-center justify-between">
                <h2 className="text-lg font-medium ">
                  {product.seller}{" "}
                  <span>
                    {product.verified === true && (
                      <img className="h-5 w-5 inline" src={verify} alt="" />
                    )}
                  </span>
                </h2>
                <div>
                  <p className="text-md font-normal ">{product.time}</p>
                </div>
              </div>
              <div className="px-4 flex items-center justify-between">
                <p className="text-md font-normal ">{product.location}</p>
                <p className="text-md font-normal ">{product.use} use</p>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <h1 className="text-lg font-bold">
                  BDT {product.resale}
                  <span className="ml-2 text-base font-normal text-gray-400 line-through">
                    {product.original}
                  </span>
                </h1>
                <label
                  onClick={() => setBooking(product)}
                  htmlFor="booking-modal"
                  className="cursor-pointer px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-primary rounded hover:bg-secondary focus:bg-gray-400 focus:outline-none"
                >
                  Book Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {booking && (
        <Modal
          user={user}
          booking={booking}
          handleBooking={handleBooking}
        ></Modal>
      )}
    </div>
  );
};

export default Brands;
