const root = process.env.REACT_APP_API_ROOT;

const handleResponse = response => response.ok ? response.json() : Promise.reject(response);

export const validateUser = async () => handleResponse(
  await fetch(`${root}/user/validate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
);

export const signUp = async (formData) => handleResponse(
  await fetch(`${root}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
);

export const login = async (formData) => handleResponse(
  await fetch(`${root}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true,
    credentials: 'include',
    body: JSON.stringify(formData)
  })
);