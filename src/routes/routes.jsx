import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import UpdateProfile from "../components/updateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import DetailsProperty from "../pages/detailsProperty/DetailsProperty";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error> ,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('/estates.json')
        },
        {
          path: '/update',
          element: <UpdateProfile></UpdateProfile>
        },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/register',
        element: <Register></Register>
       },
       {
        path: '/property/:id',
        element: <DetailsProperty></DetailsProperty>,
        loader: ()=> fetch('../estates.json')

       },

      ]
    },
  ]);
  export default router;