import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../JobCardList";

/** Renders details of a single company.
 *
 * Props:
 * - company: {will edit later...}
 *
 * RoutesList -> CompanyDetail
 */

function CompanyDetail() {
  const { name } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      const data = await JoblyApi.getCompany(name);
      setCompany(data);
    }
    fetchCompany();
  }, []);

  if(!company) return <h1>Loading....</h1>

  return (
    <>
      <h3>{ company.name }</h3>
      <p>{ company.description }</p>
      <JobCardList jobs={company.jobs}/>
    </>
  );
}

export default CompanyDetail;
