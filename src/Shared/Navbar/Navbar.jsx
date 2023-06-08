import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import useCart from "../../Hooks/useCart";
//import { FaBeer,  } from "react-icons/fa"

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const [data] = useCart();
  //console.log(data);

  const logoutHandler = () => {
    logout()
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="navbar fixed text-white z-10 max-w-screen-lg mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <li className="text-xl">
              <Link to="/">Home</Link>
            </li>

            <li className="text-xl">
              <Link to="/order/:category">order</Link>
            </li>
            <li className="text-xl">
              <Link to="/dashboard" className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <div className="badge">+{data?.length || 0}</div>
              </Link>
            </li>
            <>
              {user ? (
                <li className="text-xl">
                  <Link onClick={logoutHandler}>LogOut</Link>
                </li>
              ) : (
                <li className="text-xl">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-medium  menu-horizontal">
          <li className="text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="text-xl">
            <Link to="/order/:category">Order</Link>
          </li>
          <li className="text-xl">
            <Link to="/dashboard" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="badge">+{data?.length || 0}</div>
            </Link>
          </li>
          <>
            {user ? (
              <li className="text-xl">
                <Link onClick={logoutHandler}>LogOut</Link>
              </li>
            ) : (
              <li className="text-xl">
                <Link to="/login">Login</Link>
              </li>
            )}
          </>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
