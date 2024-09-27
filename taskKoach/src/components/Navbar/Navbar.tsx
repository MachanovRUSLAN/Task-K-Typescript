
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/users">User Profiles</Link>
        <Link to="activities">User Activities</Link>
      </div>
    </div>
  );
}

export default Navbar;
