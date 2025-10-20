import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import Destination from "../components/Destination";
import ConteactSections from "../layout/ConteactSections";
import Login from "../components/Login";
import Register from "../components/Register";
import News from "../components/News";
import BookHotel from "../components/BookHotel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path:"/news",
        loader:() => fetch("/news.json"),
        element:<News></News>
      },
      {
        path:"/hotel",
        element: <BookHotel></BookHotel>
      }
    ],
  },
  {
    path: "/connect",
    element: <ConteactSections></ConteactSections>,
    children: [
      {
        path: "/connect/login",
        element: <Login></Login>,
      },
      {
        path: "/connect/register",
        element: <Register></Register>,
      },
    ],
  },
]);
