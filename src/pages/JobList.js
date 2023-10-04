import React from "react";
import { useState, useEffect } from "react";

import SearchForm from "../SearchForm";
import JoblyApi from "../api";
import JobCardList from "../JobCardList";

/** Renders list of all jobs.
 *
 * State:
 * - jobs: [{ id, title, salary, equity }, ...]
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

  /** filter: takes in a search term and
   * returns a list of jobs that match that title */
  async function filter(searchTerm) {
    const data = await JoblyApi.getJobs(searchTerm);
    setJobs(data);
  }

  if (!jobs) return <h1>Loading....</h1>;

  return (
    <>
      <SearchForm filter={filter} />
      {jobs.length === 0 && <p>Sorry, no results were found!</p>}
      <JobCardList jobs={jobs} />
    </>

  );
}

export default JobList;
