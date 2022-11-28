import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import deleteBtn from "../../assets/choose/delete.png";
import Spinner from '../../components/Spinner/Spinner';

const ReportedItems = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const [loading, setLoading] = useState(true);

    const { data: reportedItems = [], refetch } = useQuery({
      queryKey: ["reportedItems"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/reported-items`);
        setLoading(false);
        const data = await res.json();
        return data;
      },
    });

    const handleDelete = (id) => {
        console.log(id);
      const proceed = window.confirm("Do you want to delete this item?");
      if (proceed) {
        fetch(`http://localhost:5000/reported-items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("Item deleted successfully");
            }
          });
      }
    };

    if (loading) {
      return <Spinner></Spinner>;
    }

    if (reportedItems.length === 0) {
      return (
        <div className="p-10 flex justify-center">
          <div className="bg-white p-24 rounded-md shadow-lg">
            <h2 className="text-3xl text-center font-bold">
              No Reported Items Available
            </h2>
          </div>
        </div>
      );
    }

    return (
      <div className="p-5">
        <div>
          <h2 className="text-center font-bold text-3xl mb-5">Reported Items</h2>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th className="hidden"></th>
                <th>Product</th>
                <th>Seller</th>
                <th>Seller Location</th>
                <th>Seller Email</th>
                <th>Action</th>
                <th className="hidden"></th>
              </tr>
            </thead>
            <tbody>
              {reportedItems.map((order) => (
                <tr key={order._id} className="text-center">
                  <td className="hidden"></td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-square w-12 h-12">
                          <img src={order?.img} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order?.seller}
                    <br />
                    <span className="badge badge-ghost badge-sm py-1">
                      {order?.phone}
                    </span>
                  </td>
                  <td>{order?.location}</td>
                  <td>{order?.email}</td>
                  <th>
                    <div className="w-full flex justify-center">
                      <img
                        onClick={() => handleDelete(order?._id)}
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

export default ReportedItems;