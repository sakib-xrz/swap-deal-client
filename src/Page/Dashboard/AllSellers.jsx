import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import deleteBtn from "../../assets/choose/delete.png";
import Spinner from "../../components/Spinner/Spinner";

const AllSellers = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [loading, setLoading] = useState(true);
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(
        `https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/user/all-sellers`
      );
      setLoading(false);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this seller?");
    if (proceed) {
      fetch(
        `https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/user/all-sellers/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Seller deleted successfully");
          }
        });
    }
  };

  const handleVerify = (id) => {
    fetch(
      `https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/user/all-sellers/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Seller verified successfully");
        }
      });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (allSellers.length === 0) {
    return (
      <div className="p-10 flex justify-center">
        <div className="bg-white p-24 rounded-md shadow-lg">
          <h2 className="text-3xl text-center font-bold">
            No Seller Available
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div>
        <h2 className="text-center font-bold text-3xl mb-5">All Sellers</h2>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th className="hidden"></th>
              <th>Seller Image</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Verify Status</th>
              <th>Action</th>
              <th className="hidden"></th>
            </tr>
          </thead>
          <tbody>
            {allSellers.map((seller) => (
              <tr key={seller._id} className="text-center">
                <td className="hidden"></td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-circle border-primary w-12 h-12">
                      <img src={seller?.photoURL} alt="" />
                    </div>
                  </div>
                </td>
                <td>{seller?.displayName}</td>
                <td>{seller?.email}</td>
                <td>
                  {seller?.verified ? (
                    <div className="badge badge-ghost p-3 text-white badge-sm bg-blue-500">
                      Verified
                    </div>
                  ) : (
                    <div
                      onClick={() => handleVerify(seller._id)}
                      className="badge cursor-pointer badge-ghost p-3 text-white badge-sm bg-red-500"
                    >
                      Unverified
                    </div>
                  )}
                </td>
                <th>
                  <div className="w-full flex justify-center">
                    <img
                      onClick={() => handleDelete(seller._id)}
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

export default AllSellers;
