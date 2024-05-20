import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ErreurPage from "./src/ErrorPage";
import List from "./src/List";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
 {
    path: "/list",
    element: <List />,
  },
{
    path: "*",
    element: <ErreurPage/>,
  },
]);
