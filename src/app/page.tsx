import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-5">
      <div className="text-center my-center flex flex-col gap-5">
        <h1 className="text-3xl">Todo List App</h1>
        <h3>The todo app is now updated</h3>
        <AddTask />
        <TodoList />
      </div>
    </main>
  );
}
