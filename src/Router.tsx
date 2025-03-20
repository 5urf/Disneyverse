import { createBrowserRouter } from "react-router";
import App from "./App";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

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
  },
]);

export default router;
