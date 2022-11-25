import { createBrowserRouter } from "react-router-dom";
import Brands from "../components/Brands/Brands";
import Error from "../components/Error/Error";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import MyOrders from "../Page/Dashboard/MyOrders";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:category",
        element: (
          <PrivateRoute>
            <Brands></Brands>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.category}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);
