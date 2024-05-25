import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ErreurPage from "./src/ErrorPage";
import Users from "./src/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/user/:id",
    element: <App />,
  },

  {
    path: "*", 
    element: <ErreurPage />,
  },
]);
