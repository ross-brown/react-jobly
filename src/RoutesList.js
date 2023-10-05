import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CompanyList from "./pages/CompanyList";
import CompanyDetail from "./pages/CompanyDetail";
import JobList from "./pages/JobList";
import NotFound from "./pages/NotFound";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import Profile from "./pages/Profile";
import userContext from "./userContext";


/** Has list of routes for individual components here.
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, Joblist }
 */

function RoutesList({ login, signup }) {
  const { currentUser } = useContext(userContext);

  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        {currentUser.isLoaded
          ? <>
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/profile" element={<Profile />} />
          </>
          : <>
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
          </>}
      </Routes>
    </div>
  );
}

export default RoutesList;
