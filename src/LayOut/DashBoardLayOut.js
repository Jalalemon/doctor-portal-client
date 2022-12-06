import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContexts } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Shared/Navbar";
const DashBoardLayOut = () => {

    const {user} = useContext(AuthContexts);
    const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
          <label
            htmlFor="dashboard-drawer"
            className="btn lg:hidden btn-primary drawer-button"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard"> My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers"> All users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctors"> Add a Doctors</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors"> Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayOut;
