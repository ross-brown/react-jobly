import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";

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

  return (
    <p>company here</p>
  );
}

export default CompanyDetail;
