import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Layout from "./layouts/Layout";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },

      {
        path: "/Checkout",
        element: <Checkout/>,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
