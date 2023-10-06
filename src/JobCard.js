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

function JobCard({ job }) {
  const { currentUser, apply, unapply } = useContext(userContext);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (currentUser.data.applications.includes(job.id)) setHasApplied(true);
  }, [currentUser.data.applications, job.id]);

  /** Handles on click for applying to jobs.
   *  Calls on parent function and sets hasApplied state to true.
   */

  async function handleApply(evt) {
    const jobId = evt.target.value;

    try {
      await apply(currentUser.data.username, jobId);
      setHasApplied(true);
    } catch (error) {
      console.error("Error applying to job", error);
    }
  }

  /** Handles on click for unapplying to jobs.
   *  Calls on parent function and sets hasApplied state to false.
   */

  async function handleUnapply(evt) {
    const jobId = evt.target.value;

    try {
      await unapply(currentUser.data.username, jobId);
      setHasApplied(false);
    } catch (error) {
      console.error("Error unapplying to job", error);
    }
  }

  return (
    <div className="JobCard col card my-2 p-3">
      <h4>{job.title}</h4>
      <h5>{job.companyName}</h5>
      {job.salary ? <p>{`Salary: ${job.salary}`}</p> : ""}
      {job.equity ? <p>{`Equity: ${job.equity}`}</p> : ""}
      {hasApplied
        ? <button
          value={job.id}
          className="btn btn-danger"
          onClick={handleUnapply}>
          Applied
        </button>
        :
        <button
          value={job.id}
          className="btn btn-danger"
          onClick={handleApply}>
          Apply
        </button>
      }
    </div >
  );
}

export default JobCard;
