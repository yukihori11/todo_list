"use client";

import { deleteTodo, editTodo } from "@/api";
import { Task } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null)

  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

  useEffect(() =>{
    if(isEditing){
      ref.current?.focus();
    }
  }, [isEditing])

  const handleEdit = async () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIsEditing(false);
    router.refresh();
  };

  const handleDelete = async () =>{
    await deleteTodo(todo.id);
    router.refresh();
  }

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-green-500 rounded shadow text-black"
    >
      {isEditing ? (
        <input
        ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-200 border"
          value={(editedTaskTitle)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
            setEditedTaskTitle(e.target.value)
          }}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className="text-black mr-3" onClick={handleSave}>
            保存
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            編集
          </button>
        )}

        <button className="text-red-500" onClick={handleDelete}>削除</button>
      </div>
    </li>
  );
};

export default Todo;
