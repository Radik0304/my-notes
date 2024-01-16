import { BASE_URL } from "./Auth";

const NOTES_URL = `${BASE_URL}/notes`;

//получение списка заметок
export const getNotes = () => {
  return fetch(NOTES_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "token"
      )}`,
    },
  });
};

//добавить заметку
export const addNote = (data) => {
  return fetch(NOTES_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(
        "token"
      )}`,
    },
  });
};

//удалить заметку
export const deleteNote = (id) => {
  return fetch(`${NOTES_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "token"
      )}`,
    },
  });
};
