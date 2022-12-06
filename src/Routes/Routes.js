import Login from "../Auth/Login";
import PrivateRoute from "../Auth/PrivateRoute";
import Register from "../Auth/Register";
import AdminRoutes from "../LayOut/AdminRoutes";
import DashBoardLayOut from "../LayOut/DashBoardLayOut";
import Appointment from "../Pages/Apointment/Appointment";
import AddDoctors from "../Pages/DashBoard/AddDoctors";
import AllUsers from "../Pages/DashBoard/AllUsers";
import DashBoards from "../Pages/DashBoard/DashBoards";
import ManageDoctors from "../Pages/DashBoard/ManageDoctors";
import MyAppointments from "../Pages/DashBoard/MyAppointments";
import Payment from "../Pages/Payment/Payment";
import DsplayError from "../Shared/DsplayError";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../LayOut/Main");
const { default: Home } = require("../Pages/Home/Home");
const { default: Footer } = require("../Shared/Footer");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DsplayError></DsplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/header",
        element: <header></header>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
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
    element: (
      <PrivateRoute>
        <DashBoardLayOut></DashBoardLayOut>
      </PrivateRoute>
    ),
    errorElement: <DsplayError></DsplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/adddoctors",
        element: (
          <AdminRoutes>
            <AddDoctors></AddDoctors>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoutes>
            <ManageDoctors></ManageDoctors>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoutes>
            <Payment></Payment>
          </AdminRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);