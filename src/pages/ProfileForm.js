import React, { useState, useContext } from "react";

import Alert from "../Alert";
import userContext from "../userContext";

function ProfileForm() {
  const user = useContext(userContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const [formErrors, setFormErrors] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

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
      // parent function to edit
      setIsSaved(true);
    } catch (err) {
      let errors = err[0].message;
      setFormErrors(errors);
    }
  }

  return (
    <div className="SignupForm m-5">
      <form onSubmit={handleSubmit} className="form-control">
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            disabled="true"
            required
            id="username"
            value={formData.username}
            name="username"
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
      {isSaved && <p>Changes Saved.</p>}
      {formErrors.length !== 0 && <Alert errors={formErrors} />}
    </div>
  );
}

export default ProfileForm;