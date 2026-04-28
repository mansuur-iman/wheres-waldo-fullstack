export const BASE_URL = "https://wheres-waldo-fullstack.onrender.com/api/v1";
export async function register(data) {
  const res = await fetch(`${BASE_URL}/users/register`, {
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

export async function userLogin(data) {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();

  if (!res.ok) throw new Error(responseData.msg || "Login failed.");
  return responseData;
}

export async function getFields() {
  const res = await fetch(`${BASE_URL}/fields`, {
    method: "GET",
  });
  const responseData = await res.json();
  if (!res.ok) throw new Error(responseData.msg || "Failed to fetch fields.");
  return responseData;
}
