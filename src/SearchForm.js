import React, { useState } from "react";

/** Renders search form for both companies and jobs.
 *
 * Props:
 * - filter: parent function to call
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ filter }) {
  const [searchTerm, setSearchTerm] = useState("");

  /** Updates search input value */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /** call parent filter function with current search term value. */
  function handleSubmit(evt) {
    evt.preventDefault();
    filter(searchTerm);
  }

  return (
    <div className="SearchForm mt-3">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control d-inline"
          placeholder="Enter Search Term..."
          onChange={handleChange}
          value={searchTerm}
        />
        <button className="btn btn-primary d-inline mt-2">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
