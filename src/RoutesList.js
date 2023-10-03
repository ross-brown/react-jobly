import React from "react";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import { Route, Routes } from "react-router-dom";

/** Has list of routes for individual components here.
 *
 * Props:
 * - companies: {will edit later...}
 * - company: {will edit later...}
 * - jobs: {will edit later...}
 * - handleSubmit(): will edit later...
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, Joblist }
 */

function RoutesList ({ }) {

  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:name" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </div>
  )
}

export default RoutesList;