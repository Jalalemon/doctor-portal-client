import React, { useContext } from "react";
import { Button } from "react-day-picker";
import { Link } from "react-router-dom";
import { AuthContexts } from "../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContexts);
  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

  const menuItems = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="appointment">Appointment</Link>
      </li>
      <li>
        <Link to="">About</Link>
      </li>
      <li>
        <Link to="">Reviews</Link>
      </li>
      <li>
        {" "}
        {user?.uid ? (
          <>
           <Link to="/dashBoard">DashBoard</Link>
           <button onClick={handleLogOut} > logOut </button>
          </>
        ) : (
          <Link to="/login"> login</Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar justify-between bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
