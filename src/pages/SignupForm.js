import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Alert from "../Alert";

function SignupForm({ signup, errors }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
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
      await signup(formData);
      navigate("/");
    } catch (err) {
      let errors = err.map(e => e.message);
      setFormErrors(errors);
    }
  }

  return (
    <div className="SignupForm m-5">
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
        <div className="mb-3">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            value={formData.firstName}
            name="firstName"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {formErrors && <Alert errors={formErrors} />}
    </div>
  );
}

export default SignupForm;
