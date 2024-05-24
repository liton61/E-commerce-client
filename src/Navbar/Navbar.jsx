import { useContext } from "react";
import { AuthContext } from "../authentication/Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/e-shop.png";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleSingOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            <li className="font-medium">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-medium">
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
            </li>
            {user && isAdmin && (
              <li className="font-medium">
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            {user && !isAdmin && (
              <li className="font-medium">
                <NavLink
                  to="/dashboard/userHome"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div>
          <img className="w-28" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-2 font-medium">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-2 font-medium">
            <NavLink
              to="/ProductListing"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Products
            </NavLink>
          </li>
          {user && isAdmin && (
            <li className="mx-2 font-medium">
              <NavLink
                to="/dashboard/adminHome"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {user && !isAdmin && (
            <li className="mx-2 font-medium">
              <NavLink
                to="/dashboard/userHome"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <NavLink
              onClick={handleSingOut}
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <button className="font-medium">
                <i className="fa-solid fa-right-from-bracket"></i> SingOut
              </button>
            </NavLink>
          </div>
        ) : (
          <Link to="/login">
            <button className="font-medium">
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
