import React from "react";
import Homepage from "./pages/Homepage";
import CompanyList from "./pages/CompanyList";
import CompanyDetail from "./pages/CompanyDetail";
import JobList from "./pages/JobList";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

/** Has list of routes for individual components here.
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, Joblist }
 */

function RoutesList() {

  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:name" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
