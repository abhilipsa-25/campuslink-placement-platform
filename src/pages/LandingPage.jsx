function LandingPage({ onNavigate }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="landing-page">

     {/* ================= NAVBAR ================= */}

<nav className="navbar">

  {/* LOGO */}
  <div
    className="logo"
    onClick={() => scrollToSection("top")}
    style={{ cursor: "pointer" }}
  >
    CAMPUS<span>LINK</span>
  </div>

  {/* RIGHT SIDE NAVIGATION */}
  <div className="nav-right">

    <div className="nav-links">

      <button onClick={() => scrollToSection("top")}>
        Home
      </button>

      <button onClick={() => scrollToSection("features")}>
        Features
      </button>

      <button onClick={() => scrollToSection("how-it-works")}>
        How It Works
      </button>

      <button onClick={() => scrollToSection("about")}>
        About
      </button>

    </div>

    <div className="nav-actions">

      <button
        className="login-btn"
        onClick={() => onNavigate("login")}
      >
        Login
      </button>

      <button
        className="signup-btn"
        onClick={() => onNavigate("signup")}
      >
        Sign Up
      </button>

    </div>

  </div>

</nav>


      {/* ================= HERO ================= */}

      <main
        className="hero-section"
        id="top"
      >

        <div className="hero-content">

          <div className="hero-badge">
            AI-POWERED PLACEMENT PLATFORM
          </div>

          <h1>
            Syncing Skills
            <br /> 
            <span>With <br /> Careers</span>
          </h1>

          <p className="hero-description">
            A collaborative career services dashboard that aligns student
            readiness, recruiter hiring pipelines, and campus placement
            tracking in real time.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => onNavigate("signup")}
            >
              Get Started
              <span>→</span>
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("features")}
            >
              Explore Platform
            </button>

          </div>


          {/* ================= STATS ================= */}

          <div className="hero-stats">

            <div className="stat">
              <h3>5K+</h3>
              <p>Students</p>
            </div>

            <div className="stat">
              <h3>100+</h3>
              <p>Companies</p>
            </div>

            <div className="stat">
              <h3>98%</h3>
              <p>Placement Success</p>
            </div>

          </div>

        </div>


{/* ================= IMAGE SECTION ================= */}

<div className="image-section">

  <div className="campus-image">

    <img
      src="src/assets/campus-image.jpeg"
      alt="Students celebrating graduation"
      className="campus-img"
    />

    <div className="image-overlay"></div>

    {/* AI Matching Card */}
    <div className="ai-card">

      <div className="ai-icon">
        ✦
      </div>

      <div className="ai-content">
        <strong>AI Matching</strong>
        <span>Finding opportunities...</span>
      </div>

    </div>

    {/* Small status */}
    <div className="placement-card">

      <span className="check-icon">✓</span>

      <div>
        <strong>Placement Ready</strong>
        <span>Profile matched</span>
      </div>

    </div>

  </div>

</div>

      </main>
      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="landing-info-section"
      >

        <div className="landing-section-heading">

          <span>PLATFORM FEATURES</span>

          <h2>
            Everything You Need for
            <br />
            Smarter Placements
          </h2>

          <p>
            One platform connecting students, recruiters and placement teams
            throughout the hiring journey.
          </p>

        </div>


        <div className="landing-feature-grid">

          <div className="landing-feature-card">

            <div className="landing-feature-icon">
              🎓
            </div>

            <h3>Student Readiness</h3>

            <p>
              Track skills, readiness scores, applications, interviews and
              career progress from one dashboard.
            </p>

          </div>


          <div className="landing-feature-card">

            <div className="landing-feature-icon">
              🤖
            </div>

            <h3>AI Skill Matching</h3>

            <p>
              Match student profiles with suitable job opportunities using
              skills, qualifications and role requirements.
            </p>

          </div>


          <div className="landing-feature-card">

            <div className="landing-feature-icon">
              💼
            </div>

            <h3>Recruiter Hiring</h3>

            <p>
              Manage job openings, candidates, shortlisting and hiring
              pipelines through a unified recruiter workspace.
            </p>

          </div>


          <div className="landing-feature-card">

            <div className="landing-feature-icon">
              📊
            </div>

            <h3>Placement Analytics</h3>

            <p>
              Monitor placement trends, student readiness, recruiter activity
              and overall placement performance.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="landing-info-section how-section"
      >

        <div className="landing-section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            From Campus
            <br />
            to Corporate
          </h2>

          <p>
            CAMPUSLINK connects every stage of the placement process in one
            simple workflow.
          </p>

        </div>


        <div className="landing-steps">

          <div className="landing-step-card">

            <div className="step-number">
              01
            </div>

            <h3>Build Profile</h3>

            <p>
              Students create their academic, skill and career readiness
              profile.
            </p>

          </div>


          <div className="landing-step-card">

            <div className="step-number">
              02
            </div>

            <h3>Match Opportunities</h3>

            <p>
              The platform connects student skills with suitable recruiter
              requirements.
            </p>

          </div>


          <div className="landing-step-card">

            <div className="step-number">
              03
            </div>

            <h3>Manage Hiring</h3>

            <p>
              Recruiters and placement teams manage applications, interviews
              and candidate pipelines.
            </p>

          </div>


          <div className="landing-step-card">

            <div className="step-number">
              04
            </div>

            <h3>Track Outcomes</h3>

            <p>
              Placement teams monitor offers, trends and analytics across the
              campus.
            </p>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="landing-about-section"
      >

        <div className="landing-about-content">

          <span>ABOUT CAMPUSLINK</span>

          <h2>
            One Platform.
            <br />
            Three Connected Experiences.
          </h2>

          <p>
            CAMPUSLINK brings students, recruiters and placement officers
            together to make campus-to-corporate hiring more organized,
            data-driven and transparent.
          </p>

          <div className="landing-about-points">

            <div>
              <strong>Students</strong>
              <span>Build readiness and discover relevant opportunities.</span>
            </div>

            <div>
              <strong>Recruiters</strong>
              <span>Find and manage suitable campus talent.</span>
            </div>

            <div>
              <strong>Placement Teams</strong>
              <span>Monitor drives, outcomes and placement analytics.</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="landing-cta-section">

        <div>

          <span>READY TO GET STARTED?</span>

          <h2>
            Turn Campus Talent
            <br />
            Into Career Opportunities.
          </h2>

          <p>
            Explore the CAMPUSLINK placement platform.
          </p>

          <button
            className="primary-btn landing-cta-button"
            onClick={() => onNavigate("signup")}
          >
            Get Started
            <span>→</span>
          </button>

        </div>

      </section>

    </div>
  );
}

export default LandingPage;