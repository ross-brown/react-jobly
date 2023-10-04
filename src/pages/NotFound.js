import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>This page doesn't exist.....</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
