import ErrorPage from "../Error-page";
import Root from "./Root";
import Login from "../Login";
import App from "../../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
