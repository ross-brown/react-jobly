import React from "react";

/** JobCard: simple presentation component for a job
 *
 * Props:
 * - job { id, title, salary, equity }
 *
 * JobCardList -> JobCard
 */
function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h4>{job.title}</h4>
      {job.salary ? <p>{`Salary: ${job.salary}`}</p> : ""}
      {job.equity ? <p>{`Equity: ${job.equity}`}</p> : ""}
    </div>
  );
}

export default JobCard;
