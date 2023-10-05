import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Alert from "../Alert";

/** SignupForm: form for user to fill out and register
 *
 * Props:
 * - signup: funciton to call in parent
 *
 * State:
 * - formData: {username, password, firstName, lastName, email}
 * - formErrors: [msg, msg, ....]
 *
 * RoutesList -> SignupForm -> Alert (if formErrors)
 */
function SignupForm({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const [formErrors, setFormErrors] = useState([]);

  const navigate = useNavigate();

  /** Update formData inputs */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /** handleSubmit: call parent function to signup and navigate to homepage
   *
   * If error, set formErrors state with list of error messages
   */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      let errors = err[0].message;
      setFormErrors(errors);
    }
  }

  return (
    <div className="SignupForm m-5">
      <form onSubmit={handleSubmit} className="form-control mb-4">
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            required
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
            required
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
            required
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
            required
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
            required
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {formErrors.length !== 0 && <Alert errors={formErrors} type={"danger"}/>}
    </div>
  );
}

export default SignupForm;
