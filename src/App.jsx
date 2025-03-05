import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Homepage/Home";
import ContactUs from "./pages/ContactPage/ContactUs";
import AboutUs from "./pages/AboutUs/About-us";
import Career from "./pages/Career/Career";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import TermsAndConditions from "./pages/Privacy/Terms";
import NextSameDayDelivery from "./pages/Privacy/NextOrSameDay";
import WhateverCertified from "./pages/Privacy/Certification";
import CancellationReturnRefund from "./pages/Privacy/Return-refund";
import LoginPage from "./pages/Auth/Auth";
import ForgotPassword from "./pages/Auth/ForgetPassword";
import ErrorPage from "./pages/Error";
import ProfileLayout from "./layout/ProfileLayout";
import { SidebarProvider } from "./components/ui/sidebar";
import MyProfile from "./pages/Profile/MyProfile";





export const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/contact-us",
        element:<ContactUs />
      },
      {
        path:"/about-us",
        element:<AboutUs />
      },
      {
        path:"/career",
        element:<Career />
      },
      {
        path:"/privacy-policy",
        element:<PrivacyPolicy />
      },
      {
        path:"/terms-conditions",
        element:<TermsAndConditions />
      },
      
      {
        path:"/nextsamedaydelivery",
        element:<NextSameDayDelivery />
      },

      {
        path:"/certification",
        element:<WhateverCertified />
      },
      
      {
        path:"/refund-return",
        element:<CancellationReturnRefund />
      },
      {
        path:"/login",
        element:<LoginPage />
      },
      {
        path:"/forget-password",
        element:<ForgotPassword />
      },
     
    ]
  },
  {
    path: '/profile',
    element:(
      <SidebarProvider className="block"> {/* Separate provider for Profile Layout */}
        <ProfileLayout />
      </SidebarProvider>
    ),
    errorElement:<ErrorPage />,
    children: [
      { index: true, element: <MyProfile /> },
    ]
  }
])