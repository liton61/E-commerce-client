import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="lg:flex">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block lg:w-64 bg-base-200 min-h-screen">
              <ul className="menu fixed">
                {/* Navbar menu content here */}
                {isAdmin ? (
                  <>
                    <li className="font-medium mb-2">
                      <NavLink
                        to="/dashboard/adminHome"
                        className="hover:bg-transparent"
                      >
                        <i className="fa-solid fa-house"></i>Admin Home
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="font-medium mb-2">
                      <NavLink
                        to="/dashboard/userHome"
                        className="hover:bg-transparent"
                      >
                        <i className="fa-solid fa-house"></i>User Home
                      </NavLink>
                    </li>
                  </>
                )}
                <div className="divider">OR</div>
                <li className="font-medium mb-2">
                  <NavLink to="/" className="hover:bg-transparent">
                    <i className="fa-solid fa-house"></i> Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="lg:w-full">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li className="font-medium mb-2">
                  <NavLink
                    to="/dashboard/adminHome"
                    className="hover:bg-transparent"
                  >
                    <i className="fa-solid fa-house"></i>Admin Home
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="font-medium mb-2">
                  <NavLink
                    to="/dashboard/userHome"
                    className="hover:bg-transparent"
                  >
                    <i className="fa-solid fa-house"></i>User Home
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider">OR</div>
            <li className="font-medium mb-2">
              <NavLink to="/" className="hover:bg-transparent">
                <i className="fa-solid fa-house"></i>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
