import React, { useContext } from "react";
import userContext from "../userContext";
import { Link } from "react-router-dom";

/** Renders homepage.
 *
 * RoutesList -> Homepage
*/

function Homepage() {
  const user = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {user
        ? <p>Welcome Back, {user.username}!</p>
        : <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>}
    </div>
  )
}

export default Homepage;