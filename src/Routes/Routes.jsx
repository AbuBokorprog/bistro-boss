import { createBrowserRouter } from "react-router-dom";

import Home from "../Compount/Home/Home";
import Main from "../Main/Main";
import Menu from "../Compount/Menu/Menu";
import Order from "../Compount/Order/Order";
import Login from "../Compount/Login/Login";
import Register from "../Compount/Register/Register";
import Dhasboard from "../Main/Dashboard/Dhasboard";
import MyCart from "../Pages/Dashbord/MyCart/MyCart";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import AddItem from "../Pages/Dashbord/AddItem/AddItem";

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
  {
    path: "/dashboard",
    element: <Dhasboard></Dhasboard>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItem",
        element: <AddItem></AddItem>,
      },
    ],
  },
]);

export default router;
