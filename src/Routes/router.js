import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import AddAProduct from "../Pages/Dashboard/AddAProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems";
import WelcomePage from "../Pages/Dashboard/WelcomePage";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:categoryName",
        loader: ({ params }) =>fetch(`http://localhost:5000/category/${params.categoryName}`),
        element: <CategoryProducts></CategoryProducts>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <WelcomePage></WelcomePage>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/addAProduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/reportedItems",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
