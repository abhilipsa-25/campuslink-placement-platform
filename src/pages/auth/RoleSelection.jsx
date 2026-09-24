function RoleSelection({ onNavigate }) {
  return (
    <div className="auth-page">

      <div className="role-selection-container">

        {/* LOGO */}

        <div className="auth-logo">
          CAMPUS<span>LINK</span>
        </div>


        {/* HEADER */}

        <div className="auth-header">

          <h1>Select Your Role</h1>

          <p>
            Choose how you want to continue
          </p>

        </div>


        {/* ROLE CARDS */}

        <div className="role-cards">

          {/* STUDENT */}

          <button
            className="role-card student-role"
            onClick={() => onNavigate("student-dashboard")}
          >

            <div className="role-icon">
              🎓
            </div>

            <div className="role-content">

              <h3>Student</h3>

              <p>
                Find jobs, track applications
                and build your career
              </p>

            </div>

            <span className="role-arrow">
              →
            </span>

          </button>


          {/* RECRUITER */}

          <button
            className="role-card recruiter-role"
            onClick={() => onNavigate("recruiter-dashboard")}
          >

            <div className="role-icon">
              💼
            </div>

            <div className="role-content">

              <h3>Recruiter</h3>

              <p>
                Hire top talent from campuses
              </p>

            </div>

            <span className="role-arrow">
              →
            </span>

          </button>


          {/* PLACEMENT OFFICER */}

          <button
            className="role-card officer-role"
            onClick={() => onNavigate("placement-dashboard")}
          >

            <div className="role-icon">
              👥
            </div>

            <div className="role-content">

              <h3>Placement Officer</h3>

              <p>
                Manage placements and
                analytics
              </p>

            </div>

            <span className="role-arrow">
              →
            </span>

          </button>

        </div>


        {/* BACK */}

        <button
          className="back-to-login"
          onClick={() => onNavigate("login")}
        >
          ← Back to Login
        </button>

      </div>

    </div>
  );
}

export default RoleSelection;