import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CommingSoon } from "./pages/commingSoon";
import { Home } from "./pages/home";
import NotFound from "./pages/notfound";



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
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/comingsoon",
      element: <CommingSoon />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
