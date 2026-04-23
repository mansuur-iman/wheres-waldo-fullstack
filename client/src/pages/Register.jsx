import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router";
import { validate } from "../utils/validateRegister";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
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
      const data = await register(formData);
      navigate("/login");
      console.log("API response:", data);
    } catch (err) {
      console.error("Register failed:", err.message);
      setErrors({ apiError: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>loading....</p>}
      <h2>Create Account</h2>
      {errors.apiError && <p>{errors.apiError}</p>}
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={formData.email}
            autoComplete="email"
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            value={formData.password}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="confirmPassword"
            value={formData.confirmPassword}
            required
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Register"}
        </button>
      </form>
    </div>
  );
}
