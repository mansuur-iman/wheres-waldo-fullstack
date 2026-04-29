import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router";
import { validate } from "../utils/validateRegister";
import styles from "./Register.module.css"; // Added styles

export default function RegisterUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(formData);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    try {
      setLoading(true);
      await register(formData);
      navigate("/login");
    } catch (err) {
      setErrors({ apiError: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.registerCard}>
        <h2 className={styles.title}>Join the Hunt</h2>
        <p className={styles.subtitle}>
          Create an account to track your scores.
        </p>

        {errors.apiError && (
          <div className={styles.errorMessage}>{errors.apiError}</div>
        )}

        <form onSubmit={handleFormSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              className={`${styles.input} ${errors.username ? styles.inputError : ""}`}
              placeholder="CoolFinder123"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
            {errors.username && (
              <span className={styles.errorText}>{errors.username}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              onChange={handleChange}
              placeholder="waldo@example.com"
              value={formData.email}
              autoComplete="email"
              required
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
              onChange={handleChange}
              placeholder="••••••••"
              value={formData.password}
              required
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ""}`}
              onChange={handleChange}
              placeholder="••••••••"
              value={formData.confirmPassword}
              required
            />
            {errors.confirmPassword && (
              <span className={styles.errorText}>{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Creating Account..." : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
