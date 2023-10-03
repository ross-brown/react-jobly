import React from "react";
import { NavLink } from "react-router-dom";

/** Renders Navbar.
 *
 * App -> Nav
*/

function Nav() {
  return (
    <nav>
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default Nav;