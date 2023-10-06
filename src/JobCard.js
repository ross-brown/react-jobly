import React from "react";
import "./JobCard.css";

/** JobCard: simple presentation component for a job
 *
 * Props:
 * - job { id, title, salary, equity, companyHandle, companyName }
 *
 * JobCardList -> JobCard
 */
function JobCard({ job }) {

  function handleClick(evt) {
    // call parent here
  }
  return (
    <div className="JobCard col card my-2 p-3">
      <h4>{job.title}</h4>
      <h5>{job.companyName}</h5>
      {job.salary ? <p>{`Salary: ${job.salary}`}</p> : ""}
      {job.equity ? <p>{`Equity: ${job.equity}`}</p> : ""}
      <button className="btn btn-danger" onClick={handleClick}>Apply</button>
    </div>
  );
}

export default JobCard;
