import { createBrowserRouter } from "react-router";
import App from "./App";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "character/:id",
        element: <Detail />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
], { basename: '/Disneyverse/' });

export default router;
