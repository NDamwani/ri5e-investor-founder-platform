import ErrorPage from "../Error-page";
import Root from "./Root";
import Login from "../Login/Login";
import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import VerificationCodeInput from "../VerificationCodeInput/VerificationCodeInput";
import MentorProfile from "../Mentorinfo/MentorProfile";
import ProductOwnerProfile from "../ProductOwnerInfo/ProductOwnerProfile";
import MentorMatch from "../MatchPage/MentorMatch";
import Inbox from "../Inbox/Inbox";
import ProductPage from "../productAnalyticsComponents/productPage";
import Calendly from "../Calendly/Calendly";
import ProductMatch from "../MatchPage/ProductMatch";

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
        path: "/verification-code",
        element: <VerificationCodeInput />,
      },
      {
        path: "/mentor-profile",
        element: <MentorProfile />,
      },
      {
        path: "/product-profile",
        element: <ProductOwnerProfile />,
      },
      {
        path: "/product/match",
        element: <ProductMatch />,
      },
      {
        path: "/mentor/match",
        element: <MentorMatch />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/product/dashboard",
        element: <ProductPage />,
      },
      {
        path: "/connect/calendly",
        element: <Calendly />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
