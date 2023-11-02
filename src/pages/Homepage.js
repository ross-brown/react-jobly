import React, { useContext } from "react";
import userContext from "../userContext";
import { Link } from "react-router-dom";
import "./Homepage.css";

/** Renders homepage.
 *
 * RoutesList -> Homepage
*/

function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <div>
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {currentUser.data
          ? <h3>Welcome Back, {currentUser.data.firstName}!</h3>
          : <>
            <Link className="btn btn-dark mx-1" to="/login">Login</Link>
            <Link className="btn btn-dark mx-1" to="/signup">Signup</Link>
          </>}
      </div>
    </div>
  );
}

export default Homepage;
