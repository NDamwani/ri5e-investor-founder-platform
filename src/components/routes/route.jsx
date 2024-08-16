import ErrorPage from "../Error-page";
import Root from "./Root";
import Login from "../Login";
import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import VerificationCodeInput from "../VerificationCodeInput/VerificationCodeInput";
import MentorProfile from "../Mentorinfo/MentorProfile";

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
      {
        path: "/verificationcode",
        element: <VerificationCodeInput/>,
      },
      {
        path: "/mentorprofile",
        element: <MentorProfile/>,
      }
    ],
  },
]);
