import { useState } from "react";

function SignUp({ onNavigate, setDemoUser }) {
  const [selectedRole, setSelectedRole] = useState("Student");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    organization: "",
    designation: "",
  });

  const [errors, setErrors] = useState({});

  const handleRoleChange = (role) => {
    setSelectedRole(role);

    setErrors({});

    setFormData((prev) => ({
      ...prev,
      organization: "",
      designation: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!formData.organization.trim()) {
      if (selectedRole === "Recruiter") {
        newErrors.organization = "Company name is required";
      } else {
        newErrors.organization = "College name is required";
      }
    }

    if (!formData.designation.trim()) {
      if (selectedRole === "Student") {
        newErrors.designation = "Course is required";
      } else {
        newErrors.designation = "Designation is required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    // Store the account created by the user
    setDemoUser({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: selectedRole,
      organization: formData.organization,
      designation: formData.designation,
    });

    // Move to Login
    onNavigate("login");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-logo">
          CAMPUS<span>LINK</span>
        </div>

        <div className="auth-header">
          <h1>Create Your Account</h1>
          <p>Join CampusLink and start your journey</p>
        </div>

        {/* Role Selector */}

        <div className="auth-role-selector">

          <button
            type="button"
            className={`role-tab ${
              selectedRole === "Student" ? "active" : ""
            }`}
            onClick={() => handleRoleChange("Student")}
          >
            Student
          </button>

          <button
            type="button"
            className={`role-tab ${
              selectedRole === "Recruiter" ? "active" : ""
            }`}
            onClick={() => handleRoleChange("Recruiter")}
          >
            Recruiter
          </button>

          <button
            type="button"
            className={`role-tab ${
              selectedRole === "Placement Officer"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleRoleChange("Placement Officer")
            }
          >
            Placement Officer
          </button>

        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Full Name */}

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={
                errors.fullName ? "input-error" : ""
              }
            />

            {errors.fullName && (
              <span className="form-error">
                {errors.fullName}
              </span>
            )}
          </div>


          {/* Email */}

          <div className="form-group">

            <label>
              {selectedRole === "Recruiter"
                ? "Work Email"
                : selectedRole === "Placement Officer"
                ? "Official Email"
                : "Email"}
            </label>

            <input
              type="email"
              name="email"
              placeholder={
                selectedRole === "Recruiter"
                  ? "Enter your work email"
                  : selectedRole === "Placement Officer"
                  ? "Enter your official email"
                  : "Enter your email"
              }
              value={formData.email}
              onChange={handleChange}
              className={
                errors.email ? "input-error" : ""
              }
            />

            {errors.email && (
              <span className="form-error">
                {errors.email}
              </span>
            )}

          </div>


          {/* Password */}

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className={
                errors.password ? "input-error" : ""
              }
            />

            {errors.password && (
              <span className="form-error">
                {errors.password}
              </span>
            )}

          </div>


          {/* Organization */}

          <div className="form-group">

            <label>
              {selectedRole === "Recruiter"
                ? "Company Name"
                : "College Name"}
            </label>

            <input
              type="text"
              name="organization"
              placeholder={
                selectedRole === "Recruiter"
                  ? "Enter your company name"
                  : "Enter your college name"
              }
              value={formData.organization}
              onChange={handleChange}
              className={
                errors.organization
                  ? "input-error"
                  : ""
              }
            />

            {errors.organization && (
              <span className="form-error">
                {errors.organization}
              </span>
            )}

          </div>


          {/* Course / Designation */}

          <div className="form-group">

            <label>
              {selectedRole === "Student"
                ? "Course"
                : "Designation"}
            </label>

            <input
              type="text"
              name="designation"
              placeholder={
                selectedRole === "Student"
                  ? "e.g. B.Tech CSE"
                  : selectedRole === "Recruiter"
                  ? "e.g. HR Manager"
                  : "e.g. Training & Placement Officer"
              }
              value={formData.designation}
              onChange={handleChange}
              className={
                errors.designation
                  ? "input-error"
                  : ""
              }
            />

            {errors.designation && (
              <span className="form-error">
                {errors.designation}
              </span>
            )}

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="auth-submit"
          >
            Create {selectedRole} Account
          </button>

        </form>


        {/* Footer */}

        <div className="auth-footer">

          <span>
            Already have an account?
          </span>

          <button
            type="button"
            onClick={() => onNavigate("login")}
          >
            Login
          </button>

        </div>

      </div>
    </div>
  );
}

export default SignUp;