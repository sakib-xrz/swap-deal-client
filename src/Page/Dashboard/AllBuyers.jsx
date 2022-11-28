import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import deleteBtn from "../../assets/choose/delete.png";
import toast from "react-hot-toast";

const AllBuyers = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [loading, setLoading] = useState(true);
  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/all-buyers`);
      setLoading(false);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this buyer?");
    if (proceed) {
      fetch(`http://localhost:5000/user/all-buyers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Buyer deleted successfully");
          }
        });
    }
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (allBuyers.length === 0) {
    return (
      <div className="p-10 flex justify-center">
        <div className="bg-white p-24 rounded-md shadow-lg">
          <h2 className="text-3xl text-center font-bold">
            No Buyers Available
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div>
        <h2 className="text-center font-bold text-3xl mb-5">All Buyers</h2>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th className="hidden"></th>
              <th>Buyer Image</th>
              <th>Buyer Name</th>
              <th>Buyers Email</th>
              <th>Action</th>
              <th className="hidden"></th>
            </tr>
          </thead>
          <tbody>
            {allBuyers.map((buyer) => (
              <tr key={buyer._id} className="text-center">
                <td className="hidden"></td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-circle border-primary w-12 h-12">
                      <img src={buyer?.photoURL} alt="" />
                    </div>
                  </div>
                </td>
                <td>{buyer?.displayName}</td>
                <td>{buyer?.email}</td>
                <th>
                  <div className="w-full flex justify-center">
                    <img
                      onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;
