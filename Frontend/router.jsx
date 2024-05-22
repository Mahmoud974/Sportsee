import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ErreurPage from "./src/ErrorPage";
import List from "./src/List";
import Users from "./src/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/:userId",
    element: <App />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "*",
    element: <ErreurPage />,
  },
]);
