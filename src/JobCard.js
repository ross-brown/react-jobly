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
  const { currentUser, apply, unapply, hasAppliedToJob } = useContext(userContext);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (hasAppliedToJob(job.id)) {
      setHasApplied(true);
    }
  }, [job.id]);

  /** Handles on click for applying to jobs.
   *  Calls on parent function and sets hasApplied state to true.
   */

  async function handleApply(evt) {
    const jobId = +evt.target.value;

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
    const jobId = +evt.target.value;

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
      <button
        value={job.id}
        className={`btn btn-${hasApplied ? "" : "outline-"}danger w-25`}
        onClick={hasApplied ? handleUnapply : handleApply}>
        {hasApplied ? "Applied" : "Apply"}
      </button>
    </div >
  );
}

export default JobCard;
