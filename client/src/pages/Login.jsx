import { useState } from "react";
import { useNavigate } from "react-router";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError("Email is required.");
      return;
    }
    if (!formData.password) {
      setError("Password is required.");
    }
  };
}
