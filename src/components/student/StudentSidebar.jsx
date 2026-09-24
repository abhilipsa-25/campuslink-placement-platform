function StudentSidebar({ activeItem, onNavigate }) {
  const menuItems = [
    {
      id: "student-dashboard",
      label: "Dashboard",
      icon: "▦",
    },
    {
      id: "student-profile",
      label: "My Profile",
      icon: "♙",
    },
    {
      id: "student-skill-gap",
      label: "Skill Gap",
      icon: "⌁",
    },
    {
      id: "student-jobs",
      label: "Job Recommendations",
      icon: "▣",
    },
    {
      id: "student-applications",
      label: "Applications",
      icon: "✓",
    },
    {
      id: "student-interviews",
      label: "Interviews",
      icon: "◷",
    },
  ];

  return (
    <aside className="student-sidebar">

      {/* LOGO */}

      <div className="student-sidebar-logo">

        <div className="student-logo-mark">
          C
        </div>

        <div>
          <h2>
            CAMPUS<span>LINK</span>
          </h2>

          <p>Student Portal</p>
        </div>

      </div>


      {/* MENU TITLE */}

      <div className="student-menu-title">
        MAIN MENU
      </div>


      {/* MENU */}

      <nav className="student-sidebar-menu">

        {menuItems.map((item) => (

          <button
            key={item.id}
            className={`student-sidebar-item ${
              activeItem === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >

            <span className="student-sidebar-icon">
              {item.icon}
            </span>

            <span>
              {item.label}
            </span>

          </button>

        ))}

      </nav>


      {/* BOTTOM */}

      <div className="student-sidebar-bottom">

        <div className="student-help">

          <div className="student-help-icon">
            ?
          </div>

          <div>
            <strong>Need Help?</strong>

            <p>
              Contact placement team
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default StudentSidebar;