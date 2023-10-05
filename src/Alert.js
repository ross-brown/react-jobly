import React from "react";


/** Alert: simple presentaional component that renders error messages
 *
 * Props:
 * - errors: [msg, msg, ....]
 *
 * {LoginForm, SignupForm} -> Alert
 */
function Alert({ errors }) {
  console.log("errors in alert", errors);
  return (
    <div className="Alert">
      {errors.map((err, i) => {
        return (
          <p key={i}>{err}</p>
        );
      })}
    </div>
  );
}

export default Alert;
