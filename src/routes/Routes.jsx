import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyBookedWorkers from "../pages/Dashboard/Resident/MyBookedWorkers";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import OnProgress from "../pages/Dashboard/Worker/OnProgress";
import AddService from "../pages/Dashboard/Worker/AddService";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import MyListings from "../pages/Dashboard/Worker/MyListings";
import ManageBookings from "../pages/Dashboard/Worker/ManageBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

  // Auth Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Worker Routes
      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "on-progress",
        element: <OnProgress />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "my-listings",
        element: <MyListings />,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />,
      },

      // resident routes
      {
        path: "my-booked-workers",
        element: <MyBookedWorkers />,
      },

      // admin routes
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);
