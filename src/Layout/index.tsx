import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Components";


export default function Layout() {
  return (
    <div className="app">
      <Navbar />

        <Outlet />

      <Footer />
    </div>
  );
}