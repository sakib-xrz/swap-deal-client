import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log("admin", isAdmin);

  const [isBuyer] = useBuyer(user?.email);
  console.log("buyer", isBuyer);

  const [isSeller] = useSeller(user?.email);
  console.log("seller", isSeller);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 space-y-3 bg-[#D1D5DB] w-64 text-base-content">
            {isBuyer && (
              <>
                <li className="text-primary rounded-md bg-white">
                  <Link to="/dashboard/my-orders">My Order</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li className="text-primary rounded-md bg-white">
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
                <li className="text-primary rounded-md bg-white">
                  <Link to="/dashboard/my-product">My Product</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li className="text-primary rounded-md bg-white">
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </li>
                <li className="text-primary rounded-md bg-white">
                  <Link to="/dashboard/all-sellers">All Sellers</Link>
                </li>
                <li className="text-primary rounded-md bg-white">
                  <Link to="/dashboard/reported-items">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
