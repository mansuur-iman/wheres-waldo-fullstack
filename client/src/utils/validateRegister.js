const strongPassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
};

export const validate = (formData) => {
  const newErrors = {};

  if (!formData.username) newErrors.username = "Username is required";
  else if (formData.username.length < 3)
    newErrors.username = "Username is too short";

  if (!formData.email) newErrors.email = "Email is required";

  if (!formData.password) newErrors.password = "Password is required";
  else if (formData.password.length < 8)
    newErrors.password = "Password is too short";
  else if (!strongPassword(formData.password))
    newErrors.password = "Password must include uppercase, l";

  if (!formData.confirmPassword)
    newErrors.confirmPassword = "confirmPassword is required.";
  else if (formData.password !== formData.confirmPassword)
    newErrors.confirmPassword = "password do not match";

  return newErrors;
};
