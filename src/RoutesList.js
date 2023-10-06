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
 * Props:
 * - login: fetches token from backend with username/password (from App component)
 * - signup: fetches token from backend with form data (from App component)
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, Joblist }
 */

function RoutesList({ login, signup, editProfile, apply }) {
  const { currentUser } = useContext(userContext);

  return (
    <div className="RoutesList container d-flex flex-column align-items-center">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        {currentUser.data
          ? <>
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail apply={apply} />} />
            <Route path="/jobs" element={<JobList apply={apply} />} />
            <Route path="/profile" element={<Profile editProfile={editProfile} />} />
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
