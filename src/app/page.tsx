import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold -mt-32">TODO List</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white">
          <AddTask />
          <TodoList tasks={tasks} />
        </div>
      </div>
    </main>
  );
}
