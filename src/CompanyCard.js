import React from "react";
import "./CompanyCard.css"


/** CompanyCard: simple presentation component for info on a company
 *
 * Props:
 * - company: {handle, name, description, numEmployees, logoUrl}
 *
 * CompanyList -> CompanyCard
*/
function CompanyCard({ company }) {
  return (
    <div className="CompanyCard col card my-2 p-2">
      {company.logoUrl &&
        <img src={company.logoUrl} alt={company.handle} width="75px" />}
      <h4>{company.name}</h4>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;
