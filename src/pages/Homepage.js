import React, { useContext } from "react";
import userContext from "../userContext";
import { Link } from "react-router-dom";

/** Renders homepage.
 *
 * RoutesList -> Homepage
*/

function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currentUser.data
        ? <p>Welcome Back, {currentUser.data.firstName}!</p>
        : <>
          <Link className="btn btn-primary mx-1" to="/login">Login</Link>
          <Link className="btn btn-primary mx-1" to="/signup">Signup</Link>
        </>}
    </div>
  );
}

export default Homepage;
