import { Task } from "@/types";
import React from "react";
import Todo from "./Todo";

interface TodoListProps {
  tasks: Task[];
}

export default function TodoList ({tasks}: TodoListProps) {
  return (
    <ul className="space-y-3">
      {
        tasks.map((task) => (
          <Todo key={task.id} todo={task} />
        ))}
    </ul>
  );
};
