export const BASE_URL = "https://dist.nd.ru/api";

// регистрация
export const registration = (userData) => {
  return fetch(`${BASE_URL}/reg`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// авторизация
export const auth = (authData) => {
  return fetch(`${BASE_URL}/auth`, {
    method: "POST",
    body: JSON.stringify(authData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// аутентификация
export const login = () => {
  return fetch(`${BASE_URL}/auth`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "token"
      )}`,
    },
  });
};

// выход
export const exit = () => {
  fetch(`${BASE_URL}/auth`, {
    method: "DELETE",
  });
  localStorage.removeItem("token");
};
