function JobCard({
  company,
  role,
  packageAmount,
  location,
  match,
}) {
  return (
    <div className="job-card">

      <div className="job-company-logo">
        {company.charAt(0)}
      </div>


      <div className="job-card-main">

        <div className="job-card-title">

          <div>
            <h3>{role}</h3>

            <p>{company}</p>
          </div>

          <span className="match-badge">
            {match}% Match
          </span>

        </div>


        <div className="job-details">

          <span>
            ₹ {packageAmount} LPA
          </span>

          <span>
            {location}
          </span>

        </div>

      </div>


      <button className="job-view-button">
        View
      </button>

    </div>
  );
}

export default JobCard;