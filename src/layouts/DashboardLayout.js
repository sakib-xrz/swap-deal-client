import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";

const DashboardLayout = () => {
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
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 space-y-3 bg-[#D1D5DB] w-64 text-base-content">
            <li className="text-primary rounded-md bg-white">
              <Link to="/dashboard">My Order</Link>
            </li>
            <li className="text-primary rounded-md bg-white">
              <Link to="/dashboard/add-product">Add Product</Link>
            </li>
            <li className="text-primary rounded-md bg-white">
              <Link to="/dashboard/my-product">My Product</Link>
            </li>
            {/* {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add A Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
