import React from "react";

function Alert({ errors }) {

  return (
    <div className="Alert">
      {errors.map((err, i) => {
        return <p key={i}>{err}</p>;
      })}
    </div>
  );
}

export default Alert;
