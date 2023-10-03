import React from "react";

import SearchForm from "../SearchForm";

/** Renders list of companies with its details & search bar.
 *
 * Props:
 * - companies: {will edit later...}
 * - handleSubmit(): will edit later...
 *
 * CompanyList -> { SearchForm, CompanyCard }
 */

function CompanyList() {

  return (
    <>
      <SearchForm />
      <p>Insert companies here</p>
    </>
  );
}

export default CompanyList;
