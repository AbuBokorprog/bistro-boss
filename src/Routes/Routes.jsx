import { createBrowserRouter } from "react-router-dom";

import Home from "../Compount/Home/Home";
import Main from "../Main/Main";
import Menu from "../Compount/Menu/Menu";
import Order from "../Compount/Order/Order";
import Login from "../Compount/Login/Login";
import Register from "../Compount/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
