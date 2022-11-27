import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import deleteBtn from "../../assets/choose/delete.png"

const MyProduct = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { user, logout } = useContext(AuthContext);

  const { data: myProduct = [], refetch } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("swap-token")}`,
          },
        }
      );
      if (res.status === 401 || res.status === 403) {
        return logout();
      }
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="p-5">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th className="hidden"></th>
              <th>Product</th>
              <th>Seller</th>
              <th>Seller Location</th>
              <th>Price</th>
              <th>Product Status</th>
              <th>Advertise</th>
              <th>Action</th>
              <th className="hidden"></th>
            </tr>
          </thead>
          <tbody>
            {myProduct.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="hidden"></td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-12 h-12">
                        <img src={product?.img} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {product?.seller}
                  <br />
                  <span className="badge badge-ghost badge-sm py-1">
                    {product?.phone}
                  </span>
                </td>
                <td>{product?.location}</td>
                <td>BDT {product?.resale}</td>
                <th>
                  <div className="badge badge-ghost p-3 text-white badge-sm bg-red-500">
                    {product?.isSold ? "Sold" : "Unsold"}
                  </div>
                </th>
                <th>
                  <div className="badge cursor-pointer badge-ghost p-3 text-white badge-sm bg-blue-500">
                    Advertise Now
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <img className="w-8 h-8 cursor-pointer" src={deleteBtn} alt="" />
                  </div>
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

export default MyProduct;
