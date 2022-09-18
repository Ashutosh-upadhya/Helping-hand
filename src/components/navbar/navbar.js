import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/auth";
import app from "../../firebase/base.js";
import "./navbar.css";
import helperLogo from "../../assets/Helper.svg";
// import 'ant-design';

function Navbar() {
  const [showing, setShowing] = useState(false);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      document.getElementById("login").classList.add("hidden");
      document.getElementById("signup").classList.add("hidden");

      document.getElementById("newEntry").classList.remove("hidden");
      document.getElementById("logout").classList.remove("hidden");
    }
  }, [currentUser]);

  return (
    <nav className="bg-gray-400 bg-opacity-60 dark:bg-opacity-80  transition-all duration-500 bg-navbar">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <img src={helperLogo} alt="Helper Logo" className="h-10 w-10" />
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setShowing(!showing)}
              id="hamburgerMenu"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to={currentUser ? "/dashboard" : "/"}
                  className={`${
                    window.location.href.includes("dashboard")
                      ? "bg-red-500 text-white"
                      : "text-black-800"
                  } bg-red-500 dark:bg-gray-900 text-white px-3 hover:bg-gray-900 py-2 rounded-md text-sm font-medium mr-3  transition-all duration-500`}
                  aria-current="page"
                >
                  {currentUser ? "Dashboard" : "Home"}
                </Link>

                <Link
                  to={currentUser ? "/entries" : "/"}
                  className={` ${
                    window.location.href.includes("entries")
                      ? "bg-red-500  text-white"
                      : "text-white bg-red-500"
                  } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 ${
                    currentUser ? "block" : "hidden"
                  }`}
                >
                  Entries
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex text-red-500  font-large color-red items-center justify-center sm:items-stretch sm:justify-start navbar-header">
            Helper's Hands
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/login"
              id="login"
              className="bg-red-500 dark:bg-gray-900 text-white px-3 hover:bg-gray-900 py-2 rounded-md text-sm font-medium mr-3 transition duration-500"
              aria-current="page"
            >
              Sign In
            </Link>
            {
              <Link
                to="/signup"
                id="signup"
                className="hidden bg-red-600 text-white px-3 hover:bg-yellow-700 py-2 rounded-md text-sm font-medium"
                aria-current="page"
              >
                Sign Up
              </Link>
            }
            <Link
              to="/entries"
              id="newEntry"
              className="bg-red-600 text-white px-3 hover:bg-yellow-700 flex py-2 rounded-md text-sm font-medium hidden mr-3 transition duration-500"
              aria-current="page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              New Entry
            </Link>
            <button
              onClick={() => {
                app.auth().signOut();
                window.location.href = "/";
              }}
              id="logout"
              className="bg-gray-500 dark:bg-gray-900 text-white px-3 hover:bg-gray-900 py-2 rounded-md text-sm font-medium transition duration-500 hidden"
              aria-current="page"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`transition-all duration-200 ${
          showing ? "visible h-auto opacity-100" : "invisible h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to={currentUser ? "/dashboard" : "/"}
            href="#"
            className={`${
              window.location.href.includes("dashboard" || "home")
                ? "bg-red-500 dark:bg-gray-900 text-white px-3 hover:bg-gray-900 py-2 rounded-md text-sm font-medium mr-3 transition duration-500"
                : "text-gray-700 dark:text-gray-300"
            } block px-3 py-2 rounded-md text-base font-medium`}
            aria-current="page"
          >
            {currentUser ? "Dashboard" : "Home"}
          </Link>

          <Link
            to={currentUser ? "/entries" : "/"}
            className={`${
              window.location.href.includes("entries")
                ? "bg-gray-300 dark:bg-gray-700 dark:text-white"
                : "text-gray-700 dark:text-gray-300"
            } block px-3 py-2 rounded-md text-base font-medium ${
              currentUser ? "block" : "hidden"
            }`}
          >
            Entries
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
