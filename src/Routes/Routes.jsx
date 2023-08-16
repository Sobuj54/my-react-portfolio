import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
