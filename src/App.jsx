import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Homepage/Home";
import ContactUs from "./pages/ContactPage/ContactUs";
import AboutUs from "./pages/AboutUs/About-us";
import Career from "./pages/Career/Career";





export const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
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
      }
    ]
  }
])