import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

/** Renders Navbar.
 *
 * App -> Nav
*/

function Nav() {
  const { user } = useContext(userContext);

  return (
    <nav className="Nav nav">
      <NavLink to="/">Jobly</NavLink>
      {user
        ? <div className="justify-content-end">
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        : <div className="justify-content-end">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          {/* Logout Link here with username */}
        </div>}
    </nav>
  );
}

export default Nav;
