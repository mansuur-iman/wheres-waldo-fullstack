import { useState } from "react";
import { useNavigate } from "react-router";
import { userLogin } from "../services/authService";
import styles from "./Login.module.css"; // Added styles

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      setLoading(true);
      const data = await userLogin(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // Stringify if it's an object
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Ready to find Waldo?</p>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleFormSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              className={styles.input}
              placeholder="name@example.com"
              onChange={handleChange}
              name="email"
              value={formData.email}
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={styles.input}
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              value={formData.password}
              autoComplete="password"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Checking..." : "Login to Play"}
          </button>
        </form>
      </div>
    </div>
  );
}
