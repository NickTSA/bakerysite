import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";
import NavbarComp from "./NavbarComp";

export default function Layout({ children }) {
  return (
    <div>
      <NavbarComp />
      {children}
    </div>
  );
}
