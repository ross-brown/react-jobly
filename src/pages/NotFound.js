import React from "react";

import { Link } from "react-router-dom";


/** Custom 404 Page component */
function NotFound() {
  //TODO: create if conditional on if someone is logged in or not
  // - That will dictate who sees what error message.
  return (
    <div>
      <h1>This page doesn't exist.....</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
