import { BASE_URL } from "./authService";
export async function getFields() {
  const res = await fetch(`${BASE_URL}/fields`, {
    method: "GET",
  });
  const responseData = await res.json();
  if (!res.ok) throw new Error(responseData.msg || "Failed to fetch fields.");
  return responseData;
}

export async function getFirstImage(token, fieldId) {
  const res = await fetch(`${BASE_URL}/fields/${fieldId}/firts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await res.json();

  if (!res.ok)
    throw new Error(responseData.msg || "failed to fetch field data");

  return responseData;
}

export async function sendGuess(token, fieldId, x, y, characterName) {
  const res = await fetch(`${BASE_URL}/fields/${fieldId}/play`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(x, y, characterName),
  });

  const responseData = await res.json();

  if (!res.ok) throw new Error(responseData.msg || "Failed to send guess");

  return responseData;
}

export const nextImage = async (token, fieldId) => {
  const res = await fetch(`${BASE_URL}/fields/${fieldId}/next`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Beraer ${token}`,
    },
  });

  const responseData = await res.json();

  if (!res.ok) throw new Error(responseData.msg || "failed to fetch data");

  return responseData;
};
