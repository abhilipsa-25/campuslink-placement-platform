function StudentNavbar() {
  return (
    <header className="student-navbar">

      <div className="student-navbar-title">

        <h1>
          Student Dashboard
        </h1>

        <p>
          Track your placement journey
        </p>

      </div>


      <div className="student-navbar-right">

        {/* SEARCH */}

        <div className="student-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search..."
          />

        </div>


        {/* NOTIFICATION */}

        <button className="student-notification">
          ♢
          <span></span>
        </button>


        {/* PROFILE */}

        <div className="student-navbar-profile">

          <div className="student-avatar">
            AS
          </div>

          <div className="student-profile-info">

            <strong>
              Aryan Sharma
            </strong>

            <small>
              B.Tech · CSE
            </small>

          </div>

          <span className="student-profile-arrow">
            ⌄
          </span>

        </div>

      </div>

    </header>
  );
}

export default StudentNavbar;