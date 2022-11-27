import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import deleteBtn from "../../assets/choose/delete.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const MyProduct = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this product?");
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Product deleted successfully");
          }
        });
    }
  };

  const handleAdvertise = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Product Advertise successfully");
        }
      });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (myProduct.length === 0) {
    return (
      <div className="p-10 flex justify-center">
        <div className="bg-white p-24 rounded-md shadow-lg">
          <h2 className="text-3xl text-center font-bold">
            No Product Available
          </h2>
          <div className="w-full flex justify-center mt-5">
            <Link
              className=" text-white btn btn-primary btn-sm mx-auto"
              to={"/dashboard/add-product"}
            >
              Add Product
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
                  {product?.paid === true ? (
                    <div className="badge badge-ghost p-3 text-white badge-sm bg-green-500">
                      Sold
                    </div>
                  ) : (
                    <div className="badge badge-ghost p-3 text-white badge-sm bg-red-500">
                      Unsold
                    </div>
                  )}
                </th>
                <th>
                  {product?.paid === true ? (
                    <div className="badge badge-ghost p-3 text-white badge-sm bg-blue-500 bg-opacity-40 cursor-not-allowed">
                      Advertise Now
                    </div>
                  ) : product?.isAdvertise === true ? (
                    <div
                      className="badge badge-ghost p-3 text-white badge-sm bg-green-500"
                    >
                      Advertised
                    </div>
                  ) : (
                    <div
                      onClick={() => handleAdvertise(product._id)}
                      className="badge cursor-pointer badge-ghost p-3 text-white badge-sm bg-blue-500"
                    >
                      Advertise Now
                    </div>
                  )}
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <img
                      onClick={() => handleDelete(product._id)}
                      className="w-8 h-8 cursor-pointer"
                      src={deleteBtn}
                      alt=""
                    />
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
