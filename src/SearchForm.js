import React, { useState } from "react";
import { useLocation } from "react-router-dom";

/** Renders search form for both companies and jobs.
 *
 * Props:
 * - filter: parent function to call
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ filter }) {
  const { pathname } = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [hasEquity, setHasEquity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSalaryChange(evt) {
    setMinSalary(evt.target.value);
  }

  function handleEquityChange(evt) {
    setHasEquity(evt.target.checked);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    await filter(searchTerm, minSalary, hasEquity);
    setIsLoading(false);
  }

  return (
    <div className="my-3 w-50">
      <form
        className="d-flex flex-column align-items-start gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control"
          placeholder="Enter Search Term..."
          onChange={handleChange}
          value={searchTerm}
        />
        {pathname === '/jobs' &&
          <>
            <select
              className="form-select"
              aria-label="Minimum salary select"
              onChange={handleSalaryChange}
              value={minSalary}
            >
              <option value="">Minimum Salary</option>
              <option value="60000">$60,000</option>
              <option value="80000">$80,000</option>
              <option value="100000">$100,000</option>
              <option value="120000">$120,000</option>
              <option value="140000">$140,000</option>
              <option value="160000">$160,000</option>
              <option value="180000">$180,000</option>
              <option value="200000">$200,000</option>
            </select>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={hasEquity}
                id="flexCheckDefault"
                onChange={handleEquityChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Equity Included
              </label>
            </div>
          </>
        }
        <div className="d-flex align-items-center">
          <button className="btn btn-primary">Search</button>
          {isLoading &&
            <div className="mx-3">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
