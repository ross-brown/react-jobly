import React from "react";


/** CompanyCard: simple presentation component for info on a company
 *
 * Props:
 * - company: {handle, name, description, numEmployees, logoUrl}
 *
 * CompanyList -> CompanyCard
*/
function CompanyCard({ company }) {
  return (
    <div className="CompanyCard">
      {company.logoUrl &&
        <img src={company.logoUrl} alt={company.handle} width="75px" />}
      <h2>{company.name}</h2>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;
