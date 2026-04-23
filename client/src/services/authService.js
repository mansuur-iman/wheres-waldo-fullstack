export async function register(data) {
  const res = await fetch("https://myapp.com/api/v1/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = res.json();

  if (!res.ok) {
    throw new Error(responseData.msg || "Registration failed.");
  }

  return responseData;
}
