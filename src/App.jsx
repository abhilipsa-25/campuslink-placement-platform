import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import RoleSelection from "./pages/auth/RoleSelection";



function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const [appliedJobs, setAppliedJobs] = useState([]);

  // Stores the account created during Sign Up
  const [demoUser, setDemoUser] = useState(null);

  const renderPage = () => {
    switch (currentPage) {

      /* ================= LANDING ================= */

      case "landing":
        return (
          <LandingPage
            onNavigate={setCurrentPage}
          />
        );


      /* ================= SIGN UP ================= */

      case "signup":
        return (
          <SignUp
            onNavigate={setCurrentPage}
            setDemoUser={setDemoUser}
          />
        );


      /* ================= LOGIN ================= */

      case "login":
        return (
          <Login
            onNavigate={setCurrentPage}
            demoUser={demoUser}
          />
        );


      /* ================= ROLE SELECTION ================= */

      case "role-selection":
        return (
          <RoleSelection
            onNavigate={setCurrentPage}
          />
        );


      /* ================= STUDENT ================= */

      case "student-dashboard":
        return (
          <StudentDashboard
            onNavigate={setCurrentPage}
          />
        );

      case "student-jobs":
        return (
          <JobRecommendations
            onNavigate={setCurrentPage}
            appliedJobs={appliedJobs}
            setAppliedJobs={setAppliedJobs}
          />
        );


      /* ================= DEFAULT ================= */

      default:
        return (
          <LandingPage
            onNavigate={setCurrentPage}
          />
        );
    }
  };

  return renderPage();
}

export default App;