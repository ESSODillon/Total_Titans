import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";

import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Total Titans</h1>
        </Link>
        <Link to="/create">Create Workout</Link>
      </nav>
    </div>
  );
}
