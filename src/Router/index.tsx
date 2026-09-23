import { createBrowserRouter } from "react-router-dom";

import { Benefits, ContactUs, Home } from "../Pages";
import Layout from "../Layout";
import OurClasses from "../Pages/OurClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "benefits",
        element: <Benefits />,
      },
      {
        path: "classes",
        element: <OurClasses />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      // {
      //   path: "signin",
      //   element: <SignIn />,
      // },
      // {
      //   path: "register",
      //   element: <Register />,
      // },
    ],
  },
]);

export default router;
