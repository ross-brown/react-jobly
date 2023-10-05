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
    <nav className="Nav nav">
      <NavLink to="/">Jobly</NavLink>
      {currentUser.data
        ? <div className="justify-content-end">
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/" onClick={logout}>{`Logout(${currentUser.data.username})`}</NavLink>
        </div>
        : <div className="justify-content-end">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>}
    </nav>
  );
}

export default Nav;
