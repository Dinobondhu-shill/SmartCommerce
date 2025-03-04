import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Homepage/Home";





export const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children:[
      {
        path:"/",
        element:<Home />
      }
    ]
  }
])