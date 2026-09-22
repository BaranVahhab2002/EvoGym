import { createBrowserRouter } from "react-router-dom";

import { Benefits, Classes, ContactUs, Home } from "../Pages";
import Layout from "../Layout";

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
        element: <Classes />,
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
