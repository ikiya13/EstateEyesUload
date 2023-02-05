import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

//header bar
export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link className="navbar a" to="/">
          Home
        </Link>
        <Link className="navbar a" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
