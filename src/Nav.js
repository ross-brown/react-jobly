import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

/** Renders Navbar.
 *
 * App -> Nav
*/

function Nav({ logout }) {
  const { currentUser } = useContext(userContext);

  return (
    <nav className="Nav navbar">
      <NavLink className="navbar-brand" to="/">Jobly</NavLink>
      {currentUser.data
        ? <div className="d-inline justify-content-end">
          <NavLink className="mx-2" to="/companies">Companies</NavLink>
          <NavLink className="mx-2" to="/jobs">Jobs</NavLink>
          <NavLink className="mx-2" to="/profile">Profile</NavLink>
          <NavLink className="mx-2" to="/" onClick={logout}>{`Logout(${currentUser.data.username})`}</NavLink>
        </div>
        : <div className="justify-content-end">
          <NavLink className="mx-2" to="/login">Login</NavLink>
          <NavLink className="mx-2" to="/signup">Signup</NavLink>
        </div>}
    </nav>
  );
}

export default Nav;
