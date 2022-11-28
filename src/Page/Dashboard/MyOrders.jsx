import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const { user, logout } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(
      `https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/bookings/my-bookings?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("swap-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }

        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setMyOrders(data);
      });
  }, [user?.email, logout, setLoading]);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (myOrders.length === 0) {
    return (
      <div className="p-10 flex justify-center">
        <div className="bg-white p-24 rounded-md shadow-lg">
          <h2 className="text-3xl text-center font-bold">No Order Available</h2>
          <div className="w-full flex justify-center mt-5">
            <Link
              className=" text-white btn btn-primary btn-sm mx-auto"
              to={"/"}
            >
              Book A Product
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th className="hidden"></th>
              <th>Product</th>
              <th>Buyer</th>
              <th>Meeting Location</th>
              <th>Price</th>
              <th>Payment</th>
              <th className="hidden"></th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="hidden"></td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-12 h-12">
                        <img src={order?.productImg} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order?.productName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {order?.name}
                  <br />
                  <span className="badge badge-ghost badge-sm py-1">
                    {order?.phone}
                  </span>
                </td>
                <td>{order?.location}</td>
                <td>BDT {order?.productPrice}</td>
                <th>
                  {order?.paid === true ? (
                    <div className="badge badge-ghost p-3 text-white badge-sm bg-green-500">
                      Paid
                    </div>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${order?._id}`}
                      className="badge cursor-pointer badge-ghost p-3 text-white badge-sm bg-blue-500"
                    >
                      Pay Now
                    </Link>
                  )}
                </th>
                <td className="hidden"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
