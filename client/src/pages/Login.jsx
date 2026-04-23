import { useState } from "react";
import { useNavigate } from "react-router";
import { userLogin } from "../services/authService";

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
    if (!formData.email) {
      setError("Email is required.");
      return;
    }
    if (!formData.password) {
      setError("Password is required.");
      return;
    }
    try {
      setLoading(true);
      const data = await userLogin(formData);
      console.log("Success", data);
      navigate("/");
    } catch (err) {
      console.error("Login Error", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>loading ....</p>}
      {error && <p>{error}</p>}
      <h2>Welcome Back.</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          autoComplete="email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          autoComplete="password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Checking.." : "Login"}
        </button>
      </form>
    </div>
  );
}
