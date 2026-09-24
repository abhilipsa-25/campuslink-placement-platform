import { useState } from "react";

function Login({ onNavigate, demoUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      login: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    // Check whether an account has been created
    if (!demoUser) {
      setErrors({
        login: "No account found. Please sign up first.",
      });

      return;
    }

    // Check email and password
    if (
      formData.email !== demoUser.email ||
      formData.password !== demoUser.password
    ) {
      setErrors({
        login: "Invalid email or password",
      });

      return;
    }

    // Login successful
    onNavigate("role-selection");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Logo */}

        <div className="auth-logo">
          CAMPUS<span>LINK</span>
        </div>


        {/* Header */}

        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Login to your CampusLink account</p>
        </div>


        {/* Login Form */}

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Email */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={
                errors.email || errors.login
                  ? "input-error"
                  : ""
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

            <div className="password-label">

              <label>Password</label>

              <button
                type="button"
                className="forgot-password"
                onClick={() => {
                  alert(
                    "Password reset will be available soon."
                  );
                }}
              >
                Forgot Password?
              </button>

            </div>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={
                errors.password || errors.login
                  ? "input-error"
                  : ""
              }
            />

            {errors.password && (
              <span className="form-error">
                {errors.password}
              </span>
            )}

          </div>


          {/* Login Error */}

          {errors.login && (
            <div className="form-error login-error">
              {errors.login}
            </div>
          )}


          {/* Login Button */}

          <button
            type="submit"
            className="auth-submit"
          >
            Login
          </button>

        </form>


        {/* Divider */}

        <div className="auth-divider">
          <span>or continue with</span>
        </div>


        {/* Google */}

        <button
          type="button"
          className="google-btn"
          onClick={() => {
            alert(
              "Google login will be available soon."
            );
          }}
        >
          <span className="google-icon">G</span>
          Continue with Google
        </button>


        {/* Footer */}

        <div className="auth-footer">

          <span>
            Don't have an account?
          </span>

          <button
            type="button"
            onClick={() => onNavigate("signup")}
          >
            Sign Up
          </button>

        </div>

      </div>
    </div>
  );
}

export default Login;