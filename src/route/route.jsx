import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Root from "../Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductListing from "../pages/ProductListing/ProductListing";
import ElectronicProduct from "../pages/ElectronicProduct/ElectronicProduct";
import FashionProduct from "../pages/FashionProduct/FashionProduct";
import HomeProduct from "../pages/HomeProduct/HomeProduct";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome";
import UserHome from "../pages/Dashboard/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/productListing",
        element: <ProductListing></ProductListing>,
      },
      {
        path: "/productDetail/:id",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/electronicProduct",
        element: <ElectronicProduct></ElectronicProduct>,
      },
      {
        path: "/fashionProduct",
        element: <FashionProduct></FashionProduct>,
      },
      {
        path: "/homeProduct",
        element: <HomeProduct></HomeProduct>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin dashboard
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },

      // user dashboard
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
    ],
  },
]);

export default router;
