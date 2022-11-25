import React from 'react';

const Modal = ({ user, booking, handleBooking }) => {
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm bg-primary text-white border-primary btn-circle absolute right-2 top-2 hover:bg-primary hover:text-white hover:border-primary"
          >
            ✕
          </label>
          <h2 className="text-lg font-medium text-center">{booking?.name}</h2>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-5"
          >
            <label className=" text-xs ml-2 -mb-2" htmlFor="">
              Laptop Name
            </label>
            <input
              type="text"
              disabled
              value={booking?.name}
              name="productName"
              className="input input-sm h-9 w-full input-bordered "
            />
            <label className=" text-xs ml-2 -mb-2" htmlFor="">
              Laptop Price
            </label>
            <input
              type="text"
              disabled
              value={booking?.resale}
              name="productPrice"
              className="input input-sm h-9 w-full input-bordered "
            />
            <label className=" text-xs ml-2 -mb-2" htmlFor="">
              Name
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input input-sm h-9 w-full input-bordered"
            />
            <label className=" text-xs ml-2 -mb-2" htmlFor="">
              Email
            </label>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-sm h-9 w-full input-bordered"
            />
            <label className=" text-xs ml-2 -mb-2" htmlFor="">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-sm h-9 w-full input-bordered"
            />
            <label className=" text-xs ml-2 -mb-2" htmlFor="">
              Location
            </label>
            <input
              name="location"
              type="text"
              placeholder="Meeting location"
              className="input input-sm h-9 w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-primary btn-sm h-9 w-full -mt-7"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;