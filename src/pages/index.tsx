import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main className="flex justify-center pt-32 h-screen">
      <div className="space-y-10">
        <TodoList />
        <TodoForm />
      </div>
    </main>
  );
}
