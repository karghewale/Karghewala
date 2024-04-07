import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CommingSoon } from "./pages/commingSoon";
import { Home } from "./pages/home";
import NotFound from "./pages/notfound";
import { Training } from "./pages/training";
import { Story } from "./pages/story";
import { Contact } from "./pages/contact";
import { Gallery } from "./pages/gallery";
import { Blogs } from "./pages/blogs";
import { Alumini } from "./pages/alumini";
import { Login } from "./pages/admin/login";
import { Dashboard } from "./pages/admin/dashboard";
import PrivateRoutes from "./services/privateRoute";
import { useEffect } from "react";
import { Layout } from "./pages/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/story",
          element: <Story />,
        },
        {
          path: "/training",
          element: <Training />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/alumini",
      element: <Alumini />,
    },
    {
      path: "/comingsoon",
      element: <CommingSoon />,
    },
    {
      path: "/admin",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <PrivateRoutes children={<Dashboard />} />,
    },
  ]);

  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", "#FDB5C0");
    document.documentElement.style.setProperty("--color-secondary", "#790416");
    document.documentElement.style.setProperty("--color-teritary", "#FEE6E9");
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
