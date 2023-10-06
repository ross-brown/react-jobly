import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import userContext from "./userContext";
import "./Nav.css";

/** Renders Navbar.
 *
 * Props:
 * - logout: function to log user out (lives in App component).
 *
 * App -> Nav
*/

function Nav({ logout }) {
  const { currentUser } = useContext(userContext);

  return (
    <nav className="Nav navbar border-bottom px-4">
      <Link className="navbar-brand" to="/">Jobly</Link>
      {currentUser.data
        ? <div className="d-inline justify-content-end">
          <NavLink className="mx-2" to="/companies">Companies</NavLink>
          <NavLink className="mx-2" to="/jobs">Jobs</NavLink>
          <NavLink className="mx-2" to="/profile">Profile</NavLink>
          <Link className="mx-2" to="/"
            onClick={logout}>
            {`Logout ${currentUser.data.username}`}
          </Link>
        </div>
        : <div className="justify-content-end">
          <NavLink className="mx-2" to="/login">Login</NavLink>
          <NavLink className="mx-2" to="/signup">Signup</NavLink>
        </div>}
    </nav>
  );
}

export default Nav;
