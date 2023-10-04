import React from "react";

function Alert({ errors }) {
  console.log("errors:", errors);

  return (
    <div className="Alert">
      {errors.map((err, i) => {
        return <p key={i}>{err.message}</p>;
      })}
    </div>
  );
}

export default Alert;
