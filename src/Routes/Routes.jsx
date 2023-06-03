import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Compount/Home/Home";
import Main from "../Main/Main";
import Menu from "../Compount/Menu/Menu";
import Order from "../Compount/Order/Order";

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
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
