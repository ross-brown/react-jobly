import React, { useContext } from "react";

import { Link } from "react-router-dom";
import userContext from '../userContext';


/** Custom 404 Page component */
function NotFound() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="NotFound">
      {currentUser
      ? <>
          <h1>This page doesn't exist.</h1>
          <Link to="/">Go Home</Link>
        </>
      : <>
          <h1>You must be logged in to see this page.</h1>
          <Link to="/">Go Home</Link>
        </>}
    </div>
  );
}

export default NotFound;
