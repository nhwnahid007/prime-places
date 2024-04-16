import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import UpdateProfile from "../components/updateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/update',
          element: <UpdateProfile></UpdateProfile>
        },
       {
        path: 'login',
        element: <Login></Login>
       },
       {
        path: 'register',
        element: <Register></Register>
       }
      ]
    },
  ]);
  export default router;