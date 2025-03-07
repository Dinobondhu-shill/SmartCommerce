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
// import LoginPage from "./pages/Auth/Auth";
import ForgotPassword from "./pages/Auth/ForgetPassword";
import ErrorPage from "./pages/Error";
import ProfileLayout from "./layout/ProfileLayout";
import { SidebarProvider } from "./components/ui/sidebar";
import MyProfile from "./pages/Profile/MyProfile";
import AddressBook from "./pages/Profile/AddressBook";
import CustomerWallet from "./pages/Profile/Wallet";
import MyReturn from "./pages/Profile/MyReturn";
import MyCancellations from "./pages/Profile/MyCancelllation";
import RegisterAccount from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";
import VendorRegister from "./pages/Auth/VendorRegister";
import GuestCheckout from "./pages/Checkout/GuestCheckout";
import ProductPage from "./pages/Product/ProductDetails";
import Checkout from "./pages/Checkout/CheckoutPage";
import WishlistPage from "./pages/Wishlist/Wishlist";





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
      // {
      //   path:"/log-in",
      //   element:<LoginPage />
      // },
      {
        path:"/login",
        element:<LoginPage />
      },
      {
        path:"/vendor/register",
        element:<VendorRegister />
      },

      {
        path:"/register",
        element: <RegisterAccount />
      },
      {
        path:"/forget-password",
        element:<ForgotPassword />
      },
      {
        path:"/wishlist",
        element:<WishlistPage />
      },
      {
        path:"/checkout",
        element:<Checkout />
      },
      {
        path:"/guest-checkout",
        element:<GuestCheckout />
      },
      {
        path:'/product-details',
        element:<ProductPage />
      }
     
    ]
  },
  {
    path: '/profile',
    element:(<SidebarProvider className="block"> <ProfileLayout /></SidebarProvider>),
    errorElement:<ErrorPage />,
    children: [
      { path:'/profile', element: <MyProfile /> },
      {path:'/profile/address-book', element:<AddressBook />},
      {path:"/profile/wallet", element:<CustomerWallet />},
      {path:'/profile/my-return', element:<MyReturn />},
      {path:'/profile/my-cancellation', element:<MyCancellations />},
    ]
  }
])