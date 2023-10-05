import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import React, { useState } from "react";
/** DocString... */


function LoginForm({ login, errors }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState([]);

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      console.log("did this run?", err[0].message)
      let errors = err.map(e => e.message);
      setFormErrors(errors);
    }
  }

  return (
    <div className="LoginForm m-5">
      <form onSubmit={handleSubmit} className="form-control">
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {formErrors.length !== 0 && <Alert errors={formErrors} />}
    </div>
  );
}

export default LoginForm;
