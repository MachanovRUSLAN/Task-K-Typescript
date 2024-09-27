import { createBrowserRouter } from "react-router-dom";
import ActivInfo from "../ActivInfo/ActivInfo";
import Layout from "../Layout/Layout";
import Profile from "../Profile/Profile";
import UserActivities from "../UserActivities/UserActivities";
import UserProfile from "../UserProfile/UserProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/users",
        element: <UserProfile/>,
      },
      {
        path: "/activities",
        element: <UserActivities/>,
      },
      {
        path: "/users/:id",
        element: <Profile/>,
      },
      {
        path: "/activities/:id",
        element: <ActivInfo/>,
      },
    ],
  },
]);
