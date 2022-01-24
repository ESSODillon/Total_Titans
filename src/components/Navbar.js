import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// Styles
import "./Navbar.css";

// Components
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/Total_Titans/" className="brand">
          <h1>Total Titans</h1>
        </Link>
        <Searchbar />
        <Link to="/Total_Titans/create">Create Workout</Link>
      </nav>
    </div>
  );
}
