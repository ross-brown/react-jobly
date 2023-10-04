import React, { useEffect, useState } from "react";

import SearchForm from "../SearchForm";
import CompanyCard from "../CompanyCard";
import JoblyApi from "../api";

/** Renders list of companies with its details & search bar.
 *
 * Props:
 * - companies: {will edit later...}
 * - handleSubmit(): will edit later...
 *
 * State: {handle, name, description, numEmployees, logoUrl}
 *
 * CompanyList -> { SearchForm, CompanyCard }
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    async function fetchCompanes() {
      const data = await JoblyApi.getCompanies("");
      setCompanies(data);
    }
    fetchCompanes();
  }, []);

  if(!companies) return <h1>Loading....</h1>

  return (
    <>
      <SearchForm />
      {companies.map(c => <CompanyCard key={c.handle} company={c} />)}
    </>
  );
}

export default CompanyList;
