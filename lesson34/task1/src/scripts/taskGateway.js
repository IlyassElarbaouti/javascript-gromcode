const baseUrl = "https://6145d36c38339400175fc71d.mockapi.io/api/v1/tasks";

export const getTasksList = () =>
  fetch(baseUrl).then((response) => response.json());

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
  
  export const deleteTask = taskId => fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
export const updateTask = (id, value) =>
  fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(value),
  });