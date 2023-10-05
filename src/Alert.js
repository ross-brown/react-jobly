import React from "react";


/** Alert: simple presentaional component that renders error messages
 *
 * Props:
 * - errors: [msg, msg, ....]
 *
 * {LoginForm, SignupForm} -> Alert
 */
function Alert({ errors, type }) {
  console.log("errors prop in Alert", errors);
  return (
    <div className={`alert alert-${type} pb-0`}>
     { Array.isArray(errors)
      ? errors.map((err, i) => {
          return (
            <p key={i}>{err}</p>
          );
        })
      : <p>{errors}</p>}
    </div>
  );
}

export default Alert;
