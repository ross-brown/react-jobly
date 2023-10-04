import React from "react";
import { useState, useEffect } from "react";

import SearchForm from "../SearchForm";
import JoblyApi from "../api";
import JobCardList from "../JobCardList";

/** Renders list of all jobs.
 *
 * Props:
 * - jobs: {will edit later...}
 * - handleSubmit(): will edit later...
 *
 * RoutesList -> JobList
 */

function JobList() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function fetchJobs() {
      const data = await JoblyApi.getJobs("");
      setJobs(data);
    }
    fetchJobs();
  }, []);

  if(!jobs) return <h1>Loading....</h1>

  return (
    <>
      <SearchForm />
      <JobCardList jobs={jobs} />
    </>

  );
}

export default JobList;
