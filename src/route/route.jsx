import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/about",
          element: <About></About>
        },
      ],
    },
  ]);

export default router;