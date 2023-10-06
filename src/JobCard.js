import React, { useContext, useState, useEffect } from "react";
import "./JobCard.css";

import userContext from "./userContext";

/** JobCard: simple presentation component for a job
 *
 * Props:
 * - job { id, title, salary, equity, companyHandle, companyName }
 *
 * JobCardList -> JobCard
 */
function JobCard({ job, apply }) {
  const { currentUser } = useContext(userContext);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (currentUser.data.applications.includes(job.id)) setHasApplied(true);
  }, [currentUser.data.applications, job.id]);

  async function handleClick(evt) {
    const jobId = evt.target.value;
    try {
      await apply(currentUser.data.username, jobId);
      setHasApplied(true);
    } catch (error) {
      console.error("Error applying to job", error);
    }
  }

  return (
    <div className="JobCard col card my-2 p-3">
      <h4>{job.title}</h4>
      <h5>{job.companyName}</h5>
      {job.salary ? <p>{`Salary: ${job.salary}`}</p> : ""}
      {job.equity ? <p>{`Equity: ${job.equity}`}</p> : ""}
      <button
        value={job.id}
        className="btn btn-danger"
        onClick={handleClick}
        disabled={hasApplied}>
        {hasApplied ? "Applied" : "Apply"}
      </button>
    </div>
  );
}

export default JobCard;
