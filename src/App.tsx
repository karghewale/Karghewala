import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";



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
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/comingsoon",
      element: <CommingSoon />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
