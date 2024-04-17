import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import UpdateProfile from "../components/updateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import DetailsProperty from "../pages/detailsProperty/DetailsProperty";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>,
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
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <DetailsProperty></DetailsProperty>
          </PrivateRoute>
        ),
        loader: () => fetch("/estates.json"),
      },
    ],
  },
]);
export default router;
