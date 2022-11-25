import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const { user, logout, loading, setLoading } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  console.log(myOrders);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings/my-bookings?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("swap-token")}`,
      },
    })
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
  return (
    <div className="p-5">
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr className="text-center">
                  <th className="hidden"></th>
                  <th>Product</th>
                  <th>Buyer</th>
                  <th>Meeting Location</th>
                  <th>Price</th>
                  <th>Payment Status</th>
                  <th>Checkout</th>
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
                      <div className="badge badge-ghost p-3 text-white badge-sm bg-red-500">
                        {order?.paymentStatus}
                      </div>
                    </th>
                    <th>
                      <div className="badge cursor-pointer badge-ghost p-3 text-white badge-sm bg-green-500">
                        Pay Now
                      </div>
                    </th>
                    <td className="hidden"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;