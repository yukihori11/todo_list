import { Task } from "./types";

// JSONからデータを取得するAPI
export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" });
  const tasks = res.json();

  return tasks;
};

// タスクを追加するAPI
export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};

// タスクの編集をするAPI
export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({text: newText}),
  });
  const updateTodo = res.json();

  return updateTodo;
};

// タスクを削除するAPI
export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodo = res.json();

  return deleteTodo;
};
